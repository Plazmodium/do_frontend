import { NgForm } from "@angular/forms";

export abstract class FormBase
{
    public onSubmit(form: NgForm)
    {
        if (form.valid)
        {
            this.submitForm(form.value);
        }
    }

    protected abstract submitForm(formData: any): void;
}   