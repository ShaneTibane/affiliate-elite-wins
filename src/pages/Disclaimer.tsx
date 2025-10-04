import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Scale, Info, Shield } from 'lucide-react';
import { useGeoLocation } from '../hooks/useGeoLocation';

const Disclaimer = () => {
  const { country } = useGeoLocation();

  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <title>Disclaimer - Elite Casinos</title>
        <meta name="description" content="Important disclaimer and legal information for Elite Casinos users. Read about our review process, affiliate relationships, and gambling risks." />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-yellow-400/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-yellow-400/10 p-4 rounded-xl">
                <AlertTriangle className="h-10 w-10 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Disclaimer</h1>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Last Updated: October 4, 2025
            </p>

            <div className="space-y-8">
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">General Information</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        The information provided on Elite Casinos is for informational and entertainment purposes only for residents of {country}.
                        While we strive to provide accurate, up-to-date, and reliable information, we make no representations or warranties of any kind,
                        express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products,
                        services, or related graphics contained on our website.
                      </p>
                      <p>
                        Any reliance you place on such information is strictly at your own risk. In no event will Elite Casinos be liable for any loss
                        or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from
                        loss of data or profits arising out of, or in connection with, the use of this website.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Affiliate Relationships</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        Elite Casinos operates as an independent affiliate marketing website. We may receive compensation when you click on links
                        to online casinos featured on our site or when you register and deposit at these casinos. This compensation helps us maintain
                        our website and continue providing free content and reviews to our users in {country}.
                      </p>
                      <p>
                        However, we want to emphasize that:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Our affiliate relationships do not influence our editorial independence</li>
                        <li>All reviews and rankings are based on our objective analysis and testing methodology</li>
                        <li>We are committed to providing honest, unbiased information regardless of commission structures</li>
                        <li>We clearly disclose our affiliate relationships where applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Gambling Risks</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p className="font-semibold text-yellow-400">
                        Gambling involves financial risk and may be addictive. Please play responsibly.
                      </p>
                      <p>
                        Online gambling can be entertaining, but it is important to understand the risks involved:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>The odds are always in favor of the house, meaning you are more likely to lose than win</li>
                        <li>Gambling should never be viewed as a way to make money or solve financial problems</li>
                        <li>Only gamble with money you can afford to lose</li>
                        <li>Gambling can become addictive and lead to serious personal and financial problems</li>
                        <li>Set limits on time and money spent gambling and stick to them</li>
                      </ul>
                      <p>
                        If you believe you may have a gambling problem, please seek help immediately from organizations such as:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>National Council on Problem Gambling (NCPG)</li>
                        <li>Gamblers Anonymous</li>
                        <li>GamCare</li>
                        <li>BeGambleAware.org</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Legal and Regulatory Compliance</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        It is your responsibility to ensure that online gambling is legal in your jurisdiction before participating. Laws regarding
                        online gambling vary by country, state, and region. Elite Casinos does not provide legal advice and is not responsible for
                        ensuring compliance with local laws in {country} or any other jurisdiction.
                      </p>
                      <p>
                        By using our website and the information provided:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You confirm that you are of legal gambling age in your jurisdiction (typically 18 or 21 years old)</li>
                        <li>You verify that online gambling is legal in your location</li>
                        <li>You understand that you are solely responsible for complying with all applicable laws</li>
                        <li>You accept all risks associated with online gambling activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Casino Information and Terms</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        The information about online casinos, bonuses, promotions, and terms and conditions featured on our website is provided
                        by the casinos themselves or obtained through our research. While we make every effort to keep this information current
                        and accurate:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Casino terms and conditions can change without notice</li>
                        <li>Bonuses and promotions may have specific eligibility requirements</li>
                        <li>Wagering requirements and game restrictions may apply</li>
                        <li>You should always verify current terms directly with the casino before registering or depositing</li>
                      </ul>
                      <p>
                        Elite Casinos is not responsible for any discrepancies between the information on our site and the actual terms
                        provided by the casinos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">External Links</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        Our website contains links to external websites operated by third-party online casinos and other organizations.
                        These links are provided for your convenience to provide further information:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>We have no control over the nature, content, and availability of these external sites</li>
                        <li>The inclusion of any links does not necessarily imply a recommendation or endorsement</li>
                        <li>We are not responsible for the content, privacy practices, or security of external websites</li>
                        <li>Your interactions with external sites are governed by their own terms and conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">No Professional Advice</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        The content on Elite Casinos is not intended to constitute professional advice. You should not rely solely on
                        the information provided on our website to make decisions about gambling activities. Always conduct your own
                        research and, if necessary, seek independent professional advice before engaging in online gambling.
                      </p>
                      <p>
                        We are not financial advisors, legal experts, or gambling addiction counselors. Our content is designed to
                        inform and entertain, not to provide professional guidance on financial, legal, or health matters.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        Elite Casinos, its owners, employees, and affiliates shall not be held liable for any losses, damages, or claims
                        arising from:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Use of information provided on our website</li>
                        <li>Gambling activities conducted at casinos featured on our site</li>
                        <li>Disputes with online casinos regarding bonuses, payments, or terms</li>
                        <li>Technical issues, errors, or omissions on our website</li>
                        <li>Changes to casino terms, bonuses, or available games</li>
                        <li>Unauthorized access to or alterations of your transmissions or data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-yellow-400/20"></div>

              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Scale className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Changes to This Disclaimer</h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting
                        to the website. Your continued use of Elite Casinos following any changes indicates your acceptance of the new
                        disclaimer terms.
                      </p>
                      <p>
                        We encourage you to review this disclaimer periodically to stay informed about how we are protecting your interests
                        and clarifying our relationship with you as a user.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6 mt-8">
                <p className="text-gray-200 text-center font-semibold">
                  By using Elite Casinos, you acknowledge that you have read, understood, and agree to this disclaimer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
