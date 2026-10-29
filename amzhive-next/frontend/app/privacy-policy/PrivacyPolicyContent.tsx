"use client";

import { motion } from "framer-motion";

const sections = [
  {
    heading: "SMS and MMS Communications",
    paragraphs: [
      "By providing your phone number and opting in to receive SMS and MMS communications from AMZ Pro Venture, LLC, you consent to receive text messages related to your projects, updates, customer support, and important notifications. Standard message and data rates may apply.",
      "You may opt-out of receiving future SMS/MMS messages at any time by replying \"STOP\" to any message. Upon opting out, you will no longer receive text messages from us, except for essential transactional messages related to services you have requested.",
      "We respect your privacy and are committed to protecting your personal information. For more details, please refer to our Terms of Service or email us at info@amzproventure.com. Your phone number will not be shared with third parties, and it will only be used for the purposes described in this policy.",
      "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the stated categories in this privacy policy exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
      "End users can opt out of receiving further messages by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply.",
    ],
  },
  {
    heading: "Website Visitors",
    paragraphs: [
      "Like most website operators, AMZ Pro Venture collects non-personally identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. AMZ Pro Venture's purpose in collecting non-personally identifying information is to better understand how AMZ Pro Venture's visitors use its website. From time to time, AMZ Pro Venture may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.",
      "AMZ Pro Venture also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.amzproventure.com blog posts. AMZ Pro Venture only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.",
    ],
  },
  {
    heading: "Gathering of Personally-Identifying Information",
    paragraphs: [
      "Certain visitors to AMZ Pro Venture's websites choose to interact with AMZ Pro Venture in ways that require AMZ Pro Venture to gather personally-identifying information. The amount and type of information that AMZ Pro Venture gathers depend on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.amzproventure.com to provide a username and email address.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    ],
  },
  {
    heading: "Advertisements",
    paragraphs: [
      "Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by AMZ Pro Venture and does not cover the use of cookies by any advertisers.",
    ],
  },
  {
    heading: "Links To External Sites",
    paragraphs: [
      "Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and the terms and conditions of every site you visit.",
      "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.",
    ],
  },
  {
    heading: "Google AdWords for Remarketing",
    paragraphs: [
      "www.amzproventure.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven't completed a task on our site, for example using the contact form to make an inquiry. This could be in the form of an advertisement on the Google search results page or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone's past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google's privacy policy.",
      "You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt-out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.",
    ],
  },
  {
    heading: "Protection of Certain Personally-Identifying Information",
    paragraphs: [
      "AMZ Pro Venture discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors, and affiliated organizations that (i) need to know that information in order to process it on AMZ Pro Venture's behalf or to provide services available at AMZ Pro Venture's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using AMZ Pro Venture's website, you consent to the transfer of such information to them. AMZ Pro Venture will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, AMZ Pro Venture discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when AMZ Pro Venture believes in good faith that disclosure is reasonably necessary to protect the property or rights of AMZ Pro Venture, third parties or the public at large.",
      "If you are a registered user of https://www.amzproventure.com and have supplied your email address, AMZ Pro Venture may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with AMZ Pro Venture and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. AMZ Pro Venture takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.",
    ],
  },
  {
    heading: "Aggregated Statistics",
    paragraphs: [
      "AMZ Pro Venture may collect statistics about the behavior of visitors to its website. AMZ Pro Venture may display this information publicly or provide it to others. However, AMZ Pro Venture does not disclose your personally-identifying information.",
    ],
  },
  {
    heading: "Affiliate Disclosure",
    paragraphs: [
      "This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "To enrich and perfect your online experience, AMZ Pro Venture uses \"Cookies\", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.",
      "A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. AMZ Pro Venture uses cookies to help AMZ Pro Venture identify and track visitors, their usage of https://www.amzproventure.com, and their website access preferences. AMZ Pro Venture visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using AMZ Pro Venture's websites, with the drawback that certain features of AMZ Pro Venture's websites may not function properly without the aid of cookies.",
      "By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to AMZ Pro Venture's use of cookies.",
    ],
  },
  {
    heading: "E-commerce",
    paragraphs: [
      "Those who engage in transactions with AMZ Pro Venture – by purchasing AMZ Pro Venture's services or products, are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, AMZ Pro Venture collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor's interaction with AMZ Pro Venture. AMZ Pro Venture does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.",
    ],
  },
  {
    heading: "Business Transfers",
    paragraphs: [
      "If AMZ Pro Venture, or substantially all of its assets, were acquired, or in the unlikely event that AMZ Pro Venture goes out of business or enters bankruptcy, user information would be one of the assets that are transferred or acquired by a third party. You acknowledge that such transfers may occur and that any acquirer of AMZ Pro Venture may continue to use your personal information as set forth in this policy.",
    ],
  },
  {
    heading: "Privacy Policy Changes",
    paragraphs: [
      "Although most changes are likely to be minor, AMZ Pro Venture may change its Privacy Policy from time to time, and in AMZ Pro Venture's sole discretion. AMZ Pro Venture encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.",
    ],
  },
  {
    heading: "Credit & Contact Information",
    paragraphs: [
      "If you have any questions about this Privacy Policy, please contact us via email or phone.",
      "Email: info@amzproventure.com",
    ],
  },
];

export default function PrivacyPolicyContent() {
  return (
    <>
      {/* Hero */}
      <section className="w-full" style={{ backgroundColor: "#e2e2e2" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16">
          <motion.p
            className="font-medium mb-4 tracking-wide"
            style={{ fontSize: "16px", color: "#000000" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Legal
          </motion.p>
          <motion.h1
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(26px, 4vw, 45px)",
              color: "#000000",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Privacy <span style={{ color: "#ff9900" }}>Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          {/* Intro */}
          <motion.p
            className="text-[#67768e] leading-relaxed mb-10"
            style={{ fontSize: "15px", lineHeight: "1.8" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            AMZ Pro Venture is registered at: 2400 Siskiyou St Lewisville TX, 75056. It is AMZ Pro Venture&apos;s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to www.amzproventure.com (hereinafter, &quot;us&quot;, &quot;we&quot;, or &quot;www.amzproventure.com&quot;). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (&quot;Privacy Policy&quot;) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources. This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
          </motion.p>

          {/* Sections */}
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: "#000000",
                }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[#67768e] mb-4 last:mb-0"
                  style={{ fontSize: "15px", lineHeight: "1.8" }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
