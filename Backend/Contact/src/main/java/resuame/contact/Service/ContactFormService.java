package resuame.contact.Service;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactFormService {

    private final JavaMailSender mailSender;

    public ContactFormService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactForm(String senderName, String senderEmail, String message) {
        if (senderName == null
                || senderName.isEmpty()
                || senderEmail == null
                || senderEmail.isEmpty()
                || message == null
                || message.isEmpty()) {
            throw new IllegalArgumentException("Invalid input: Name, email, or message cannot be empty.");
        }

        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(senderEmail);
            simpleMailMessage.setTo("@gmail.com"); // Replace with your own email address
            simpleMailMessage.setSubject("Contact Form: " + senderName);
            simpleMailMessage.setText(message);

            this.mailSender.send(simpleMailMessage);
        } catch (MailException e) {
            // Handle exceptions, e.g., log the error
        }
    }


}
