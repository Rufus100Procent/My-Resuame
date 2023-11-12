package resuame.contact.API;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import resuame.contact.Model.ContactFormRequest;
import resuame.contact.Service.ContactFormService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/contact")
public class ContactFormController {
    private final ContactFormService contactFormService;

    public ContactFormController(ContactFormService contactFormService) {
        this.contactFormService = contactFormService;
    }



    @PostMapping("/submit")
    public ResponseEntity submitContactForm(@RequestBody ContactFormRequest request) {
        String senderName = request.getName();
        String senderEmail = request.getEmail();
        String message = request.getDescription();

        contactFormService.sendContactForm(senderName, senderEmail, message);
        //frontend will get status code 200, + string message
        return ResponseEntity.ok("Contact form submitted successfully");
    }
}
