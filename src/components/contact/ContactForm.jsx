import React, { useState, useEffect } from 'react';
import {
  Send,
  User,
  Mail,
  FileText,
  MessageSquare,
  ArrowRight,
  AlertCircle,
  Info,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { profileData } from '../../data/profile';
import './ContactForm.css';

export default function ContactForm({ prefilledSubject, nameInputRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusNotice, setStatusNotice] = useState(null);

  // Sync prefilled subject if provided from quick action cards or hero
  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledSubject
      }));
      setErrors((prev) => ({ ...prev, subject: '' }));
    }
  }, [prefilledSubject]);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    switch (name) {
      case 'name':
        if (!trimmed) return 'Please enter your name.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!trimmed) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
        return '';
      case 'subject':
        if (!trimmed) return 'Please enter a subject.';
        if (trimmed.length < 2) return 'Subject must be at least 2 characters.';
        return '';
      case 'message':
        if (!trimmed) return 'Please write a message.';
        if (trimmed.length < 5) return 'Message must be at least 5 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: errorMsg
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched
    const newTouched = {
      name: true,
      email: true,
      subject: true,
      message: true
    };
    setTouched(newTouched);

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      setStatusNotice({
        type: 'error',
        message: 'Please complete all required fields correctly before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatusNotice(null);

    // Check if a backend contact API URL is configured in environment variables
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

    if (apiUrl) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim()
          })
        });

        if (response.ok) {
          setStatusNotice({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({});
          setErrors({});
        } else {
          throw new Error('Server returned an error status.');
        }
      } catch (err) {
        setStatusNotice({
          type: 'error',
          message: 'Unable to reach the email service right now. Please email me directly at ' + profileData.email
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // In accordance with prompt guidelines: no false success notification.
      // Honest delivery handling via mailto link opening the user's email client.
      setTimeout(() => {
        setIsSubmitting(false);
        const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject.trim()}`);
        const bodyContent = `Hi Abrar,\n\n${formData.message.trim()}\n\n---\nFrom: ${formData.name.trim()}\nReply-To: ${formData.email.trim()}`;
        const bodyEncoded = encodeURIComponent(bodyContent);
        const mailtoUrl = `mailto:${profileData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

        setStatusNotice({
          type: 'info',
          message: `Opening your email client to send your message to ${profileData.email}. If it doesn't open automatically, feel free to copy your message and email me directly.`
        });

        window.location.href = mailtoUrl;
      }, 500);
    }
  };

  return (
    <div className="contact-form-card" id="contact-form">
      {/* Header */}
      <div className="contact-form-header">
        <div className="contact-form-icon-wrap">
          <Send size={20} />
        </div>
        <div>
          <h2 className="contact-form-title">Send a Message</h2>
          <p className="contact-form-desc">
            Fill out the form below and I'll get back to you soon.
          </p>
        </div>
      </div>

      {/* Form Status Notice */}
      {statusNotice && (
        <div className={`contact-status-banner status-${statusNotice.type}`} role="alert">
          {statusNotice.type === 'error' && <AlertCircle size={18} className="status-icon" />}
          {statusNotice.type === 'info' && <Info size={18} className="status-icon" />}
          {statusNotice.type === 'success' && <CheckCircle2 size={18} className="status-icon" />}
          <span className="status-msg-text">{statusNotice.message}</span>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} noValidate className="contact-form-body">
        {/* Name and Email 2-column row */}
        <div className="contact-form-row">
          {/* Name */}
          <div className="contact-field-group">
            <label htmlFor="contact-name" className="contact-label">
              Your Name <span className="required-asterisk">*</span>
            </label>
            <div className={`contact-input-wrapper ${errors.name && touched.name ? 'has-error' : ''}`}>
              <User size={18} className="contact-field-icon" />
              <input
                ref={nameInputRef}
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                className="contact-input"
                aria-required="true"
                aria-invalid={errors.name && touched.name ? 'true' : 'false'}
              />
            </div>
            {errors.name && touched.name && (
              <span className="contact-field-error" role="alert">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="contact-field-group">
            <label htmlFor="contact-email" className="contact-label">
              Your Email <span className="required-asterisk">*</span>
            </label>
            <div className={`contact-input-wrapper ${errors.email && touched.email ? 'has-error' : ''}`}>
              <Mail size={18} className="contact-field-icon" />
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="contact-input"
                aria-required="true"
                aria-invalid={errors.email && touched.email ? 'true' : 'false'}
              />
            </div>
            {errors.email && touched.email && (
              <span className="contact-field-error" role="alert">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="contact-field-group">
          <label htmlFor="contact-subject" className="contact-label">
            Subject <span className="required-asterisk">*</span>
          </label>
          <div className={`contact-input-wrapper ${errors.subject && touched.subject ? 'has-error' : ''}`}>
            <FileText size={18} className="contact-field-icon" />
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What is this about?"
              className="contact-input"
              aria-required="true"
              aria-invalid={errors.subject && touched.subject ? 'true' : 'false'}
            />
          </div>
          {errors.subject && touched.subject && (
            <span className="contact-field-error" role="alert">{errors.subject}</span>
          )}
        </div>

        {/* Message */}
        <div className="contact-field-group">
          <label htmlFor="contact-message" className="contact-label">
            Message <span className="required-asterisk">*</span>
          </label>
          <div className={`contact-input-wrapper textarea-wrapper ${errors.message && touched.message ? 'has-error' : ''}`}>
            <MessageSquare size={18} className="contact-field-icon textarea-icon" />
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project, opportunity or just say hi..."
              className="contact-textarea"
              aria-required="true"
              aria-invalid={errors.message && touched.message ? 'true' : 'false'}
            />
          </div>
          {errors.message && touched.message && (
            <span className="contact-field-error" role="alert">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="contact-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="btn-spinner" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
              <ArrowRight size={18} className="submit-arrow-icon" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
