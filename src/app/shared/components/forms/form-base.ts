import { NgForm } from "@angular/forms";

export abstract class FormBase
{
    public onSubmit(form: NgForm)
    {
        if (form.valid)
        {
            this.onSubmitForm(form.value);
        }
    }

    protected abstract onSubmitForm(formData: any): void;
}   