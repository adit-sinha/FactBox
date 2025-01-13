from flask import Flask, request, jsonify
import sendgrid
import datetime
from sendgrid.helpers.mail import Mail

app = Flask(__name__)

# Set up your SendGrid API key
SENDGRID_API_KEY = 'your_sendgrid_api_key'
sg = sendgrid.SendGridAPIClient(api_key=SENDGRID_API_KEY)

@app.route('/api/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    to = data.get('to')

    subj = str(datetime.datetime.now())[:-7] + str(data.get('name'))
    #put Time.now(), fullname as title
    text = data.get('text')

    # Construct the email
    message = Mail(
        from_email='quizboxnet@gmail.com',
        to_emails=to,
        subject=subj,
        plain_text_content=text
    )

    try:
        response = sg.send(message)
        return jsonify({'message': 'Email sent successfully!', 'status': response.status_code}), 200
    except Exception as e:
        print(str(e))
        return jsonify({'message': 'Failed to send email', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)