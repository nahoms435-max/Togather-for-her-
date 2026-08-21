from flask import Flask, flash, redirect, render_template, request, url_for
from flask_mail import Mail, Message

# 1. Initialize the Flask application instance first
app = Flask(__name__)

# 2. Configure Flask-Mail / Secret key if needed
app.secret_key = "your_secret_key_here"  # Required for flash() messages
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "your_email@gmail.com"
app.config["MAIL_PASSWORD"] = "your_app_password"

# 3. Initialize Mail
mail = Mail(app)

# -------------------------------------------------------------
# Now your routes can use @app.route(...)
# -------------------------------------------------------------


@app.route("/contact", methods=["POST"])
def contact():
  # ... your contact function code .