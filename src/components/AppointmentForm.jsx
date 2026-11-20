import { useState } from 'react';

const INITIAL_FORM_STATE = {
  fullName: '',
  phone: '',
  email: '',
  specialty: '',
  doctor: '',
  reason: '',
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName': {
        const val = value.trim();
        if (!val) return 'Full name is required.';
        if (val.length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(val)) return 'Please enter a valid name.';
        return '';
      }
      case 'phone': {
        const val = value.trim();
        if (!val) return 'Phone number is required.';
        if (!/^\d{10}$/.test(val)) return 'Please enter a valid 10-digit mobile number.';
        return '';
      }
      case 'email': {
        const val = value.trim();
        if (!val) return '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
        return '';
      }
      case 'specialty': {
        if (!value) return 'Please select a specialty.';
        return '';
      }
      case 'reason': {
        const val = value.trim();
        if (!val) return 'Please describe your reason for visit.';
        if (val.length < 10) return 'Please provide more detail (at least 10 characters).';
        return '';
      }
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanVal = value;

    if (name === 'phone') {
      cleanVal = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: cleanVal }));

    if (touched[name]) {
      const errorMsg = validateField(name, cleanVal);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      specialty: true,
      reason: true,
    };
    setTouched(allTouched);

    const newErrors = {};
    let isValid = true;

    ['fullName', 'phone', 'email', 'specialty', 'reason'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      // Scroll to first invalid field
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refNum = 'MMJ-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(refNum);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
    setSubmittedRef(null);
  };

  const getInputClass = (fieldName) => {
    if (!touched[fieldName]) return 'form-input';
    if (errors[fieldName]) return 'form-input error';
    if (formData[fieldName]) return 'form-input success';
    return 'form-input';
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info Column */}
          <div className="contact-info reveal">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Request an Appointment</h2>
            <p className="section-subtitle">
              Fill in the form and our team will contact you within 24 hours to confirm your appointment.
            </p>
            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon">⏱</div>
                <div>
                  <strong>Quick Response</strong>
                  <p>We respond within 24 hours</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">🔒</div>
                <div>
                  <strong>100% Confidential</strong>
                  <p>Your data is never shared</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">🏥</div>
                <div>
                  <strong>Expert Care</strong>
                  <p>20+ specialists available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-wrapper reveal">
            <div className="demo-banner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <strong>Demo Form</strong> &mdash; This is a frontend demonstration. No data is transmitted to any real hospital system.
            </div>

            {!submittedRef ? (
              <form className="appointment-form" id="appointmentForm" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={getInputClass('fullName')}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span className="form-error" id="fullNameError">
                      {errors.fullName}
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={getInputClass('phone')}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={10}
                    />
                    <span className="form-error" id="phoneError">
                      {errors.phone}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="optional">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={getInputClass('email')}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-error" id="emailError">
                    {errors.email}
                  </span>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="specialty" className="form-label">
                      Preferred Specialty <span className="required">*</span>
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      className={`form-select ${getInputClass('specialty')}`}
                      value={formData.specialty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select a specialty</option>
                      <option value="cataract">Cataract Surgery</option>
                      <option value="vitreo-retina">Vitreo-Retina</option>
                      <option value="paediatric">Paediatric Ophthalmology</option>
                      <option value="lasik">LASIK / Clear Eye Surgery</option>
                      <option value="cornea">Cornea Services</option>
                      <option value="glaucoma">Glaucoma Care</option>
                      <option value="oculoplasty">Oculoplasty</option>
                      <option value="contact-lens">Contact Lens Clinic</option>
                      <option value="general">General Eye Check-Up</option>
                    </select>
                    <span className="form-error" id="specialtyError">
                      {errors.specialty}
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctor" className="form-label">
                      Preferred Doctor <span className="optional">(Optional)</span>
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      className="form-input form-select"
                      value={formData.doctor}
                      onChange={handleChange}
                    >
                      <option value="">No preference</option>
                      <option value="shetty">Dr. Rohit M. Shetty</option>
                      <option value="nayak">Dr. Supriya R. Nayak</option>
                      <option value="patil">Dr. Anil Kumar Patil</option>
                      <option value="jadhav">Dr. Meena Jadhav</option>
                      <option value="kulkarni">Dr. Vijay Kulkarni</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    Reason for Visit <span className="required">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    className={`form-textarea ${getInputClass('reason')}`}
                    placeholder="Please describe your eye concern or reason for visit..."
                    value={formData.reason}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={4}
                  ></textarea>
                  <span className="form-error" id="reasonError">
                    {errors.reason}
                  </span>
                </div>

                <div className="privacy-note">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  Your information is confidential and used only for appointment scheduling.
                </div>

                <button
                  type="submit"
                  className="btn btn-amber btn-lg btn-full"
                  id="submitBtn"
                  disabled={isSubmitting}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                  </svg>
                  {isSubmitting ? 'Submitting…' : 'Request Appointment'}
                </button>
              </form>
            ) : (
              <div className="form-success" id="formSuccess" style={{ display: 'flex' }}>
                <div className="success-icon">✅</div>
                <h3>Appointment Request Received!</h3>
                <p>Thank you! Your appointment request has been successfully submitted.</p>
                <div className="ref-number" id="refNumber">
                  Ref. No: {submittedRef}
                </div>
                <p className="success-note">
                  Our team will contact you within 24 hours to confirm your appointment. For urgent queries, call{' '}
                  <a href="tel:+918362261500">0836-2261500</a>.
                </p>
                <button type="button" className="btn btn-primary" onClick={handleReset}>
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
