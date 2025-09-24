<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $firstName;
    public $lastName;
    public $email;
    public $text;




    public function __construct($firstName,$lastName,$email,$text)
    {
        $this->firstName=$firstName;
        $this->lastName=$lastName;
        $this->email=$email;
        $this->text=$text;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('email.contactMail');
    }
}
