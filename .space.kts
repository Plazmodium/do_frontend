import jetbrains.space.konfiguration.*
import jetbrains.space.vcs.checkout.GitCheckout
import jetbrains.space.vcs.checkout.GitHubCheckout

spaceApplication {
    container("openjdk:11") {
    kotlinScript { api ->
        api.space().projects.automation.deployments.start(
            project = api.projectIdentifier(),
            targetIdentifier = TargetIdentifier.Key("do-frontend-deployment"),
            version = "1.0.0",
            // automatically update deployment status based on a status of a job
            syncWithAutomationJob = true
        )
    }
}

    
    // Define the deployment configuration for the Angular app
    deployment("angular-deployment") {
        spec {
            container {
                name = "angular-container"
                image = "node:14-alpine"
                command = "npm"
                args = listOf("run", "build")
                ports = emptyList()
                env = mapOf(
                    "NODE_ENV" to "production"
                )
            }
        }
        workspace {
            checkout(GitHubCheckout(
                "jetbrains",
                "angular-sample-app",
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
                repository = "https://github.com/jetbrains/angular-sample-app.git",
                branch = "dev",
                readOnly = true
            ))
        }
        // Firebase Hosting deploy
        deploy {
            script = """
                npm install -g firebase-tools
                firebase login --no-localhost --ci
                cd ./dist/angular-sample-app
                firebase deploy --only hosting --project <dev-firebase-project-id>
            """
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
                repository = "https://github.com/jetbrains/angular-sample-app.git",
                branch = "staging",
                readOnly = true
            ))
        }
        // Firebase Hosting deploy
        deploy {
            script = """
                npm install -g firebase-tools
                firebase login --no-localhost --ci
                cd ./dist/angular-sample-app
                firebase deploy --only hosting --project <staging-firebase-project-id>
            """
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
                repository = "https://github.com/jetbrains/angular-sample-app.git",
                branch = "main",
                readOnly = true
            ))
        }
        // Firebase Hosting deploy
        deploy {
            script = """
                npm install -g firebase-tools
                firebase login --no-localhost --ci
                cd ./dist/angular-sample-app
                firebase deploy --only hosting --project <prod-firebase-project-id>
            """
        }
    }
}
