import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Elite Casinos</title>
        <meta name="description" content="Read the Terms of Service for Elite Casinos. Understanding our terms helps ensure a safe and fair experience for all users." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Welcome to Elite Casinos. These Terms of Service govern your use of our website and services.
                      By accessing or using our website, you agree to be bound by these terms. If you do not agree
                      with any part of these terms, please do not use our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {/* Acceptance of Terms */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    1. Acceptance of Terms
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      By accessing and using Elite Casinos, you accept and agree to be bound by the terms and
                      provisions of this agreement. Additionally, when using particular services offered through
                      Elite Casinos, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                    <p>
                      These terms may be updated from time to time, and we will notify users of any significant changes.
                      Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
                    </p>
                  </div>
                </div>

                {/* Age Restrictions */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    2. Age Restrictions
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      You must be at least 18 years of age or the legal age for gambling in your jurisdiction
                      (whichever is higher) to use this website. By using our services, you represent and warrant
                      that you meet these age requirements.
                    </p>
                    <p>
                      We reserve the right to request proof of age and identity at any time. Failure to provide
                      such documentation may result in account suspension or termination.
                    </p>
                  </div>
                </div>

                {/* Use of Services */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    3. Use of Services
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>Elite Casinos provides:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Casino reviews and ratings</li>
                      <li>Information about online gambling platforms</li>
                      <li>Bonus and promotion information</li>
                      <li>Gaming guides and educational content</li>
                      <li>Links to third-party casino operators</li>
                    </ul>
                    <p className="mt-3">
                      You agree to use our services only for lawful purposes and in accordance with these terms.
                      You agree not to use the website in any way that violates any applicable laws or regulations.
                    </p>
                  </div>
                </div>

                {/* Affiliate Relationships */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    4. Affiliate Relationships
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      Elite Casinos participates in affiliate marketing programs. We may receive compensation when
                      you click on links to casinos and other services featured on our website. This compensation
                      helps support our operations and allows us to continue providing free content.
                    </p>
                    <p>
                      Our affiliate relationships do not influence our reviews or recommendations. All reviews are
                      based on our independent analysis, testing, and evaluation of casino operators.
                    </p>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    5. Intellectual Property Rights
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      The content on Elite Casinos, including but not limited to text, graphics, logos, images,
                      and software, is the property of Elite Casinos or its content suppliers and is protected by
                      international copyright laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, create derivative works from, publicly display,
                      or exploit any content from our website without our express written permission.
                    </p>
                  </div>
                </div>

                {/* User Conduct */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    6. User Conduct
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Use the website for any illegal purpose</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt the website or servers</li>
                      <li>Transmit any viruses, malware, or harmful code</li>
                      <li>Engage in any form of automated data collection (scraping)</li>
                      <li>Impersonate any person or entity</li>
                      <li>Harass, abuse, or harm other users</li>
                    </ul>
                  </div>
                </div>

                {/* Third-Party Links */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    7. Third-Party Websites
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      Our website contains links to third-party websites and services that are not owned or
                      controlled by Elite Casinos. We have no control over and assume no responsibility for
                      the content, privacy policies, or practices of any third-party websites.
                    </p>
                    <p>
                      When you click on affiliate links and visit casino websites, you are subject to their
                      terms and conditions. We strongly advise you to read the terms and conditions of any
                      third-party websites you visit.
                    </p>
                  </div>
                </div>

                {/* Disclaimers */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    8. Disclaimers
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      The information provided on Elite Casinos is for informational purposes only. We do not
                      guarantee the accuracy, completeness, or usefulness of any information on the website.
                    </p>
                    <p>
                      Elite Casinos is not a gambling operator. We do not process payments, handle player
                      funds, or operate any gambling services. All gambling activities take place on third-party
                      casino websites.
                    </p>
                    <p>
                      Gambling involves financial risk and may not be legal in all jurisdictions. It is your
                      responsibility to ensure that online gambling is legal in your location before participating.
                    </p>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    9. Limitation of Liability
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      To the fullest extent permitted by law, Elite Casinos shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                      whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
                      intangible losses resulting from:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your use or inability to use our services</li>
                      <li>Any unauthorized access to or use of our servers</li>
                      <li>Any interruption or cessation of transmission to or from our website</li>
                      <li>Any losses incurred from gambling activities</li>
                      <li>Any errors or omissions in any content</li>
                    </ul>
                  </div>
                </div>

                {/* Indemnification */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    10. Indemnification
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      You agree to defend, indemnify, and hold harmless Elite Casinos and its officers, directors,
                      employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
                      including reasonable attorneys' fees, arising out of or in any way connected with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your access to or use of the website</li>
                      <li>Your violation of these Terms of Service</li>
                      <li>Your violation of any third-party rights</li>
                      <li>Your gambling activities on third-party websites</li>
                    </ul>
                  </div>
                </div>

                {/* Termination */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    11. Termination
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We reserve the right to terminate or suspend your access to our website immediately, without
                      prior notice or liability, for any reason whatsoever, including without limitation if you
                      breach these Terms of Service.
                    </p>
                    <p>
                      All provisions of the Terms which by their nature should survive termination shall survive
                      termination, including ownership provisions, warranty disclaimers, indemnity, and limitations
                      of liability.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    12. Governing Law
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      These Terms shall be governed and construed in accordance with the laws of the jurisdiction
                      in which Elite Casinos operates, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any disputes arising from these terms or your use of the website shall be resolved through
                      binding arbitration in accordance with the rules of the applicable arbitration association.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    13. Changes to Terms
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We reserve the right to modify or replace these Terms at any time at our sole discretion.
                      If a revision is material, we will make reasonable efforts to provide at least 30 days'
                      notice prior to any new terms taking effect.
                    </p>
                    <p>
                      What constitutes a material change will be determined at our sole discretion. By continuing
                      to access or use our website after those revisions become effective, you agree to be bound
                      by the revised terms.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    14. Contact Information
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-white mb-2">Elite Casinos</p>
                      <p>Email: support@elitecasinos.net</p>
                      <p>Website: www.elitecasinos.net</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acknowledgment Box */}
              <div className="mt-12 glass-dark rounded-2xl p-8 border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Acknowledgment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      By using Elite Casinos, you acknowledge that you have read, understood, and agree to be
                      bound by these Terms of Service. You also acknowledge that you meet all age and legal
                      requirements to use our services in your jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;
