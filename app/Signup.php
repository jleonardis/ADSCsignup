<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Ctct\Components\Contacts\Contact;
use Ctct\ConstantContact;
use Ctct\Exceptions\CtctException;

class Signup extends Model
{
    protected $fillable = [
      'first_name', 'last_name', 'email'
    ];

    public function saveToConstantContact(){

      try
      {
        $cc = new ConstantContact(env('API_KEY',''));

        $contact = new Contact();
        $contact->addEmail($this->email);
        $contact->addList('1817990513');
        $contact->first_name = $this->first_name;
        $contact->last_name = $this->last_name;

        $response = $cc->contactService->addContact(env('API_AUTH',''), $contact, array("action_by" => "ACTION_BY_OWNER"));

        return $response->toJson();
        
      } catch(CtctException $error){
        return $error->getErrors();
      }

    }
}
