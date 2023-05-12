import jetbrains.space.konfiguration.*
import jetbrains.space.vcs.checkout.GitCheckout
import jetbrains.space.vcs.checkout.GitHubCheckout

spaceApplication {

    // Define the deployment configuration for the Angular app
    deployment("angular-deployment") {
        spec {
            container {
                name = "angular-container"
                image = "node:14-alpine"
                command = "npm"
                args = listOf("start")
                ports = listOf(4200)
                env = mapOf(
                    "NODE_ENV" to "production"
                )
            }
        }
        workspace {
            checkout(GitHubCheckout(
                "jetbrains",
                "do_frontend",
                branch = "main",
                readOnly = true
            ))
        }
    }
    
    // Define the dev environment where the Angular app will be deployed
    environment("dev") {
        spec {
            from {
                image = "ubuntu:20.04"
            }
        }
        workspace {
            checkout(GitCheckout(
                repository = "https://github.com/Plazmodium/do_frontend.git",
                branch = "dev",
                readOnly = true
            ))
        }
    }
    
    // Define the staging environment where the Angular app will be deployed
    environment("staging") {
        spec {
            from {
                image = "ubuntu:20.04"
            }
        }
        workspace {
            checkout(GitCheckout(
                repository = "https://github.com/Plazmodium/do_frontend.git",
                branch = "staging",
                readOnly = true
            ))
        }
    }
    
    // Define the production environment where the Angular app will be deployed
    environment("production") {
        spec {
            from {
                image = "ubuntu:20.04"
            }
        }
        workspace {
            checkout(GitCheckout(
                repository = "https://github.com/Plazmodium/do_frontend.git,
                branch = "main",
                readOnly = true
            ))
        }
    }
}
