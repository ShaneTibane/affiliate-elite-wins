import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Mail, Cookie, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Elite Casinos</title>
        <meta name="description" content="Read the Privacy Policy for Elite Casinos. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
            <Lock className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Privacy Policy
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
                  <Shield className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Elite Casinos is committed to protecting your privacy. This Privacy Policy explains how we
                      collect, use, disclose, and safeguard your information when you visit our website. Please read
                      this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                      please do not access the site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {/* Information We Collect */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="h-6 w-6 text-yellow-400 mr-3" />
                    1. Information We Collect
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Personal Information</h4>
                      <p className="mb-2">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us via email or contact forms</li>
                        <li>Create an account on our website</li>
                        <li>Participate in surveys or promotions</li>
                        <li>Leave comments or reviews</li>
                      </ul>
                      <p className="mt-2">
                        This information may include: name, email address, phone number, demographic information,
                        and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h4>
                      <p className="mb-2">
                        When you visit our website, we automatically collect certain information about your device,
                        including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>IP address and geographic location</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website addresses</li>
                        <li>Device identifiers</li>
                        <li>Clickstream data</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    2. How We Use Your Information
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, operate, and maintain our website</li>
                      <li>Improve, personalize, and expand our services</li>
                      <li>Understand and analyze how you use our website</li>
                      <li>Develop new products, services, and features</li>
                      <li>Communicate with you for customer service and support</li>
                      <li>Send you newsletters, marketing, and promotional materials</li>
                      <li>Process your transactions and manage your requests</li>
                      <li>Find and prevent fraud and security issues</li>
                      <li>Comply with legal obligations</li>
                      <li>Display personalized content and advertising</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies and Tracking */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Cookie className="h-6 w-6 text-yellow-400 mr-3" />
                    3. Cookies and Tracking Technologies
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our website and store
                      certain information. Tracking technologies include beacons, tags, and scripts to collect and
                      track information and to improve and analyze our service.
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Types of Cookies We Use:</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                        <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                      </ul>
                    </div>
                    <p>
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                      However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    4. Third-Party Services
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      We may employ third-party companies and individuals to facilitate our service, provide service
                      on our behalf, perform service-related functions, or assist us in analyzing how our service is used.
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Third-Party Service Providers Include:</h4>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> Website analytics and user behavior tracking</li>
                        <li><strong>Advertising Networks:</strong> Display targeted advertisements</li>
                        <li><strong>Email Service Providers:</strong> Manage and send email communications</li>
                        <li><strong>Payment Processors:</strong> Process payments (if applicable)</li>
                        <li><strong>Casino Operators:</strong> When you click affiliate links to casino websites</li>
                      </ul>
                    </div>
                    <p>
                      These third parties have access to your personal information only to perform these tasks on our
                      behalf and are obligated not to disclose or use it for any other purpose.
                    </p>
                  </div>
                </div>

                {/* Affiliate Disclosure */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    5. Affiliate Marketing and Data Sharing
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      Elite Casinos participates in affiliate marketing programs. When you click on links to casino
                      websites through our site, we may share certain information with those casino operators, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Click source and referral information</li>
                      <li>Anonymous tracking identifiers</li>
                      <li>General geographic location (country/region)</li>
                    </ul>
                    <p className="mt-3">
                      Once you visit a third-party casino website, their privacy policy applies. We encourage you to
                      read their privacy policies before providing any personal information.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-yellow-400 mr-3" />
                    6. Data Security
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal
                      information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Secure server infrastructure</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and authentication</li>
                      <li>Data backup and recovery procedures</li>
                    </ul>
                    <p className="mt-3">
                      However, no method of transmission over the Internet or electronic storage is 100% secure. While
                      we strive to use commercially acceptable means to protect your personal information, we cannot
                      guarantee its absolute security.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="h-6 w-6 text-yellow-400 mr-3" />
                    7. Data Retention
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We will retain your personal information only for as long as necessary to fulfill the purposes
                      outlined in this Privacy Policy. We will retain and use your information to the extent necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Comply with our legal obligations</li>
                      <li>Resolve disputes</li>
                      <li>Enforce our agreements and policies</li>
                      <li>Provide ongoing services you have requested</li>
                    </ul>
                    <p className="mt-3">
                      When we no longer need your personal information, we will securely delete or anonymize it.
                    </p>
                  </div>
                </div>

                {/* Your Privacy Rights */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-yellow-400 mr-3" />
                    8. Your Privacy Rights
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                      <li><strong>Right to Rectification:</strong> Request correction of inaccurate information</li>
                      <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
                      <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Right to Object:</strong> Object to our processing of your personal data</li>
                      <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                    </ul>
                    <p className="mt-3">
                      To exercise these rights, please contact us using the information provided at the end of this policy.
                      We will respond to your request within a reasonable timeframe.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    9. Children's Privacy
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      Our website is not intended for children under the age of 18. We do not knowingly collect
                      personally identifiable information from anyone under the age of 18. If you are a parent or
                      guardian and you are aware that your child has provided us with personal data, please contact us.
                    </p>
                    <p>
                      If we become aware that we have collected personal data from children without verification of
                      parental consent, we will take steps to remove that information from our servers.
                    </p>
                  </div>
                </div>

                {/* International Data Transfers */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    10. International Data Transfers
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      Your information, including personal data, may be transferred to and maintained on computers
                      located outside of your state, province, country, or other governmental jurisdiction where the
                      data protection laws may differ from those in your jurisdiction.
                    </p>
                    <p>
                      If you are located outside the jurisdiction where our servers are located and choose to provide
                      information to us, please note that we transfer the data to that jurisdiction and process it there.
                    </p>
                    <p>
                      Your consent to this Privacy Policy followed by your submission of such information represents
                      your agreement to that transfer.
                    </p>
                  </div>
                </div>

                {/* Marketing Communications */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="h-6 w-6 text-yellow-400 mr-3" />
                    11. Marketing Communications
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      With your consent, we may send you marketing emails about our services, new casino reviews,
                      promotions, and other information we think you may find interesting.
                    </p>
                    <p>
                      You may opt out of receiving marketing communications at any time by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Clicking the unsubscribe link in any marketing email</li>
                      <li>Contacting us directly at support@elitecasinos.net</li>
                      <li>Updating your email preferences in your account settings</li>
                    </ul>
                    <p className="mt-3">
                      Please note that even if you opt out of marketing communications, we may still send you
                      non-promotional emails, such as those about your account or our ongoing business relations.
                    </p>
                  </div>
                </div>

                {/* Changes to Privacy Policy */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    12. Changes to This Privacy Policy
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                      the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                      Policy are effective when they are posted on this page.
                    </p>
                    <p>
                      For material changes, we may provide more prominent notice, such as adding a statement to our
                      homepage or sending you an email notification.
                    </p>
                  </div>
                </div>

                {/* GDPR Compliance */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                    13. GDPR Compliance (For EU Residents)
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you are a resident of the European Economic Area (EEA), you have certain data protection rights
                      under the General Data Protection Regulation (GDPR). We aim to take reasonable steps to allow you
                      to correct, amend, delete, or limit the use of your personal data.
                    </p>
                    <p>
                      The legal bases for our processing of personal information include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your consent to the processing</li>
                      <li>Our legitimate business interests</li>
                      <li>Compliance with legal obligations</li>
                      <li>Performance of a contract with you</li>
                    </ul>
                  </div>
                </div>

                {/* CCPA Privacy Rights */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-yellow-400 mr-3" />
                    14. CCPA Privacy Rights (For California Residents)
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you are a California resident, you have specific rights under the California Consumer Privacy
                      Act (CCPA):
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Right to know what personal information is collected</li>
                      <li>Right to know if personal information is sold or disclosed</li>
                      <li>Right to say no to the sale of personal information</li>
                      <li>Right to access your personal information</li>
                      <li>Right to delete personal information</li>
                      <li>Right to equal service and price</li>
                    </ul>
                    <p className="mt-3">
                      We do not sell your personal information to third parties.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="h-6 w-6 text-yellow-400 mr-3" />
                    15. Contact Us
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy, your rights, or our data practices, please
                      contact us at:
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-white mb-2">Elite Casinos - Privacy Department</p>
                      <p>Email: privacy@elitecasinos.net</p>
                      <p>General Support: support@elitecasinos.net</p>
                      <p>Website: www.elitecasinos.net</p>
                    </div>
                    <p className="mt-4">
                      We will respond to all requests within 30 days of receipt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Commitment Box */}
              <div className="mt-12 glass-dark rounded-2xl p-8 border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Our Privacy Commitment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      At Elite Casinos, we are committed to protecting your privacy and maintaining the trust you place
                      in us. We continuously review and update our privacy practices to ensure we meet the highest
                      standards of data protection. Your privacy is not just a legal requirement for us—it's a
                      fundamental value that guides everything we do.
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

export default PrivacyPolicy;
