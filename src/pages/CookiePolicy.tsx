import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Eye, Shield, CheckCircle, AlertCircle, Info } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Elite Casinos</title>
        <meta name="description" content="Learn about how Elite Casinos uses cookies and similar tracking technologies to improve your browsing experience." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
            <Cookie className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Cookie Policy
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
                  <Info className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">What Are Cookies?</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Cookies are small text files that are placed on your computer or mobile device when you visit a
                      website. They are widely used to make websites work more efficiently and provide a better user
                      experience, as well as to provide information to the website owners.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      This Cookie Policy explains how Elite Casinos uses cookies and similar technologies when you
                      visit our website. It describes what these technologies are, why we use them, and your rights
                      to control our use of them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {/* Types of Cookies */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Cookie className="h-6 w-6 text-yellow-400 mr-3" />
                    1. Types of Cookies We Use
                  </h3>
                  <div className="text-gray-300 space-y-6 leading-relaxed">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        Essential Cookies
                      </h4>
                      <p className="mb-2">
                        These cookies are strictly necessary for the website to function and cannot be switched off
                        in our systems. They are usually only set in response to actions made by you which amount to
                        a request for services.
                      </p>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-3">
                        <p className="font-semibold text-white mb-2">Examples:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Session management and authentication</li>
                          <li>Security and fraud prevention</li>
                          <li>Cookie consent preferences</li>
                          <li>Load balancing</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Eye className="h-5 w-5 text-blue-400 mr-2" />
                        Analytics and Performance Cookies
                      </h4>
                      <p className="mb-2">
                        These cookies allow us to count visits and traffic sources so we can measure and improve
                        the performance of our website. They help us understand which pages are the most and least
                        popular and see how visitors move around the site.
                      </p>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-3">
                        <p className="font-semibold text-white mb-2">Examples:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Google Analytics</li>
                          <li>Page view tracking</li>
                          <li>User journey analysis</li>
                          <li>Bounce rate measurement</li>
                          <li>Time on site tracking</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <Settings className="h-5 w-5 text-purple-400 mr-2" />
                        Functional Cookies
                      </h4>
                      <p className="mb-2">
                        These cookies enable enhanced functionality and personalization. They may be set by us or
                        by third party providers whose services we have added to our pages.
                      </p>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-3">
                        <p className="font-semibold text-white mb-2">Examples:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Language preferences</li>
                          <li>Region selection</li>
                          <li>User interface preferences</li>
                          <li>Video player settings</li>
                          <li>Font size preferences</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <AlertCircle className="h-5 w-5 text-orange-400 mr-2" />
                        Advertising and Targeting Cookies
                      </h4>
                      <p className="mb-2">
                        These cookies may be set through our site by our advertising partners. They may be used to
                        build a profile of your interests and show you relevant advertisements on other sites.
                      </p>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-3">
                        <p className="font-semibold text-white mb-2">Examples:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Google Ads and DoubleClick</li>
                          <li>Facebook Pixel</li>
                          <li>Affiliate tracking cookies</li>
                          <li>Retargeting pixels</li>
                          <li>Ad performance measurement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* First-Party vs Third-Party */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                    2. First-Party vs Third-Party Cookies
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">First-Party Cookies</h4>
                      <p>
                        These are cookies set directly by Elite Casinos. We use first-party cookies to remember your
                        preferences, track your use of our website, and improve your experience.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Third-Party Cookies</h4>
                      <p className="mb-2">
                        These are cookies set by domains other than Elite Casinos. We use third-party cookies for
                        analytics, advertising, and other services provided by our partners:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> To understand how visitors use our website</li>
                        <li><strong>Advertising Networks:</strong> To display relevant advertisements</li>
                        <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                        <li><strong>Affiliate Networks:</strong> To track referrals to casino operators</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Session vs Persistent */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Info className="h-6 w-6 text-yellow-400 mr-3" />
                    3. Session vs Persistent Cookies
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Session Cookies</h4>
                        <p className="text-sm mb-3">
                          Temporary cookies that are deleted when you close your browser.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Expire when browser closes</li>
                          <li>Enable page navigation</li>
                          <li>Remember form inputs</li>
                          <li>Maintain login state</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h4>
                        <p className="text-sm mb-3">
                          Remain on your device until they expire or you delete them.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Stored for set period</li>
                          <li>Remember preferences</li>
                          <li>Track return visits</li>
                          <li>Enable auto-login</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specific Cookies Used */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Cookie className="h-6 w-6 text-yellow-400 mr-3" />
                    4. Specific Cookies We Use
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p className="mb-4">
                      Below is a detailed list of cookies that may be set when you use Elite Casinos:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-yellow-400/20 border-b border-yellow-400/30">
                            <th className="text-left p-3 text-white font-semibold">Cookie Name</th>
                            <th className="text-left p-3 text-white font-semibold">Purpose</th>
                            <th className="text-left p-3 text-white font-semibold">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">_ga</td>
                            <td className="p-3 text-sm">Google Analytics - Distinguish users</td>
                            <td className="p-3 text-sm">2 years</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">_gid</td>
                            <td className="p-3 text-sm">Google Analytics - Distinguish users</td>
                            <td className="p-3 text-sm">24 hours</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">_gat</td>
                            <td className="p-3 text-sm">Google Analytics - Throttle request rate</td>
                            <td className="p-3 text-sm">1 minute</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">cookie_consent</td>
                            <td className="p-3 text-sm">Remember cookie preferences</td>
                            <td className="p-3 text-sm">1 year</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">session_id</td>
                            <td className="p-3 text-sm">Maintain user session</td>
                            <td className="p-3 text-sm">Session</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">preferred_lang</td>
                            <td className="p-3 text-sm">Remember language preference</td>
                            <td className="p-3 text-sm">6 months</td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="p-3 font-mono text-sm">affiliate_id</td>
                            <td className="p-3 text-sm">Track affiliate referrals</td>
                            <td className="p-3 text-sm">30 days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Note: This list is not exhaustive and may change as we update our services.
                    </p>
                  </div>
                </div>

                {/* Other Tracking Technologies */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-yellow-400 mr-3" />
                    5. Other Tracking Technologies
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>In addition to cookies, we may use other tracking technologies:</p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Web Beacons (Pixel Tags)</h4>
                      <p>
                        Small graphic images embedded in web pages and emails that work with cookies to track user
                        activity and measure campaign effectiveness.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Local Storage</h4>
                      <p>
                        HTML5 local storage allows websites to store data locally in your browser, similar to cookies
                        but with larger capacity. We use this to enhance performance and user experience.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Session Storage</h4>
                      <p>
                        Similar to local storage but data is cleared when the browser session ends. Used for temporary
                        data during your visit.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Device Fingerprinting</h4>
                      <p>
                        Collection of information about your device configuration to create a unique identifier.
                        Used for fraud prevention and security purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Purpose of Cookies */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    6. Why We Use Cookies
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>We use cookies for several important reasons:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Essential Operations:</strong> Enable core website functionality and security</li>
                      <li><strong>Performance Monitoring:</strong> Understand how visitors use our site to improve it</li>
                      <li><strong>Personalization:</strong> Remember your preferences and provide tailored content</li>
                      <li><strong>Analytics:</strong> Measure traffic, user behavior, and conversion rates</li>
                      <li><strong>Advertising:</strong> Deliver relevant ads and measure campaign effectiveness</li>
                      <li><strong>Affiliate Tracking:</strong> Credit casino partners for referred players</li>
                      <li><strong>Fraud Prevention:</strong> Detect and prevent malicious activity</li>
                      <li><strong>User Experience:</strong> Provide seamless navigation and remember your settings</li>
                    </ul>
                  </div>
                </div>

                {/* Managing Cookies */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Settings className="h-6 w-6 text-yellow-400 mr-3" />
                    7. How to Manage Cookies
                  </h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                      preferences in several ways:
                    </p>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Browser Settings</h4>
                      <p className="mb-2">
                        Most web browsers allow you to control cookies through their settings. Here's how to manage
                        cookies in popular browsers:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                        <li><strong>Opera:</strong> Settings → Privacy & security → Cookies</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Cookie Consent Tool</h4>
                      <p>
                        When you first visit our website, you'll see a cookie banner allowing you to accept or reject
                        non-essential cookies. You can change your preferences at any time by clicking the cookie
                        settings link in the footer.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Third-Party Opt-Out</h4>
                      <p className="mb-2">You can opt out of certain third-party cookies:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target=\"_blank" rel="noopener noreferrer\" className="text-yellow-400 hover:text-yellow-300 underline">Google Analytics Opt-out Browser Add-on</a></li>
                        <li><strong>Advertising:</strong> <a href="http://www.youronlinechoices.com" target=\"_blank" rel="noopener noreferrer\" className="text-yellow-400 hover:text-yellow-300 underline">Your Online Choices</a></li>
                        <li><strong>Network Advertising:</strong> <a href="http://optout.networkadvertising.org" target=\"_blank" rel="noopener noreferrer\" className="text-yellow-400 hover:text-yellow-300 underline">NAI Opt-out</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Impact of Disabling */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-3" />
                    8. Impact of Disabling Cookies
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you choose to disable or reject cookies, some features of our website may not function properly:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You may need to manually adjust preferences each visit</li>
                      <li>Some features and pages may not work correctly</li>
                      <li>You may not be able to access certain areas of the website</li>
                      <li>Personalized content and recommendations may not be available</li>
                      <li>We won't be able to remember your cookie preferences</li>
                    </ul>
                    <p className="mt-3">
                      Note that essential cookies cannot be disabled as they are necessary for the website to function.
                    </p>
                  </div>
                </div>

                {/* Updates to Cookie Policy */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Info className="h-6 w-6 text-yellow-400 mr-3" />
                    9. Updates to This Cookie Policy
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices, technology,
                      legal requirements, or other factors. We will notify you of any material changes by posting the
                      updated policy on this page and updating the "Last Updated" date.
                    </p>
                    <p>
                      We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                    10. Contact Us
                  </h3>
                  <div className="text-gray-300 space-y-3 leading-relaxed">
                    <p>
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-white mb-2">Elite Casinos - Cookie Inquiries</p>
                      <p>Email: privacy@elitecasinos.net</p>
                      <p>General Support: support@elitecasinos.net</p>
                      <p>Website: www.elitecasinos.net</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent Notice */}
              <div className="mt-12 glass-dark rounded-2xl p-8 border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <Cookie className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Your Cookie Choices</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      We respect your right to privacy and give you control over your cookie preferences. By using
                      Elite Casinos, you consent to our use of essential cookies. For all other cookies, you can
                      manage your preferences through your browser settings or our cookie consent tool.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      We believe in transparency and want you to understand exactly how cookies enhance your
                      experience on our site. If you have any questions or concerns, we're here to help.
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

export default CookiePolicy;
