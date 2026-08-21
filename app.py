import os
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Required for flash messages
app.secret_key = os.environ.get('SECRET_KEY', 'your_secret_key_here')

# Flask-Mail configuration
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True

# Replace with your actual sender Gmail address and Gmail App Password
app.config["MAIL_USERNAME"] = os.environ.get('MAIL_USERNAME', 'your_email@gmail.com')
app.config["MAIL_PASSWORD"] = os.environ.get('MAIL_PASSWORD', 'your_16_letter_app_password')

mail = Mail(app)

# Co-founders' email addresses
CO_FOUNDER_EMAILS = ['bekihibe@gmail.com', 'juliaasamerew@gmail.com']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    sender_name = request.form.get('name')
    sender_email = request.form.get('email')
    message_body = request.form.get('message')

    # Basic input check
    if not sender_name or not sender_email or not message_body:
        flash('Please fill out all fields.', 'error')
        return redirect(url_for('index'))

    subject = f"New Inquiry from {sender_name}"
    body_content = f"Name: {sender_name}\nEmail: {sender_email}\n\nMessage:\n{message_body}"

    try:
        msg = Message(
            subject=subject,
            sender=app.config["MAIL_USERNAME"],
            recipients=CO_FOUNDER_EMAILS,
            body=body_content,
            reply_to=sender_email
        )
        mail.send(msg)
        # Sets the success message displayed below the button
        flash('Thank you! We will reach out to you soon.', 'success')
    except Exception as e:
        print(f"Error sending email: {e}")
        flash('An error occurred while sending your message. Please try again.', 'error')

    # Redirecting automatically clears all text fields back to blank
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)