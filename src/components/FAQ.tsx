import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'Do I need a doctor\'s referral to start physiotherapy sessions?',
    a: 'No, you do not need a direct referral to see a physiotherapist. However, if you have existing diagnostic reports, MRI scans, or orthopedic discharge cards, bringing them to your first consultation is highly helpful.'
  },
  {
    q: 'What should I wear for my first clinical consultation?',
    a: 'Wear comfortable, loose-fitting athletic clothing. For knee assessments, shorts are preferred; for neck, shoulder, or upper back pain, loose t-shirts allow us to examine joint ranges and posture easily.'
  },
  {
    q: 'How long does each clinic or home visit session last?',
    a: 'An initial consultation and screening session takes about 45 to 60 minutes. Standard treatment sessions typically last 40 to 50 minutes depending on the complexity and the list of modalities used.'
  },
  {
    q: 'Can you provide home visit services in my area in Ahmedabad?',
    a: 'We cover most western and central areas of Ahmedabad, including Satellite, Vastrapur, Bopal, Prahladnagar, Paldi, Vasna, and Navrangpura. Contact us with your address to confirm availability.'
  },
  {
    q: 'How many sessions will it take for me to recover?',
    a: 'Recovery depends on the severity, age, and nature of the pain. Minor muscle strains might resolve in 3 to 6 sessions, whereas slip disc, chronic arthritis, or stroke paralysis rehabilitation can take several weeks or months.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ background: 'var(--cream)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="h-lg">Frequently Asked Questions</h2>
          <p>Common questions about clinic appointments, treatment programs, and home visit guidelines.</p>
        </div>

        <div className="faq-list" data-aos="fade-up">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'open' : ''}`} 
                key={index}
              >
                <div 
                  className="faq-q"
                  onClick={() => toggleFaq(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  style={{ outline: 'none' }}
                >
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--ink)' }}>{faq.q}</h4>
                  <i 
                    className="fa-solid fa-plus"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      color: 'var(--teal)'
                    }}
                  ></i>
                </div>
                <div 
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                  }}
                >
                  <p style={{ margin: 0, paddingTop: '12px', color: 'var(--muted)', fontSize: '0.9rem' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
