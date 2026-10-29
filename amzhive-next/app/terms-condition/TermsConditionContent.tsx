"use client";

import { motion } from "framer-motion";

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "1. Services",
    paragraphs: [
      `(a) The Company agrees to provide the Customer with the Services which shall include the use of the Company's proprietary software and access to its proprietary platform. The Services may be further defined in one or more order confirmations or the Customer shall have the option to purchase the Services through an online checkout portal by selecting the Services and agreeing to these Terms.`,
      `(b) Customer may only adjust the Services ordered by executing a new or revised Order Confirmation or through an online checkout portal. Changes to the Services may result in an adjustment to the Fees, and will be subject to the following: (i) the term for the new Fees and new Services will be coterminous with the preexisting Term; (ii) Fees will be the then current Fees set by Company; (iii) any increase to the Fees which results from changes made in the middle of a billing month will be charged in full on a pro-rated basis; and (iv) any reduction in Fees that results from changes made in the middle of a billing month will not take effect until the next billing month and no partial refunds will be given.`,
      `(c) In the event of any conflict between these Terms and those contained in an Order Confirmation, the terms contained in the applicable Order Confirmation shall control.`,
      `(d) Although the Company attempts to ensure the integrity and accuracy of the Platform, it makes no representations, warranties, or guarantees whatsoever as to the correctness or accuracy of the Platform and Content thereon. It is possible that the Platform could include typographical errors, inaccuracies, or other errors, and that unauthorized additions, deletions, and alterations could be made to the Platform by third parties. In the event that an inaccuracy arises, please inform the Company so that it can be corrected.`,
      `(e) In the event a product or service is listed at an incorrect price due to a typographical error or error in pricing information received from our suppliers, we have the right to refuse or cancel any orders placed for product/service listed at the incorrect price. If your credit or debit card has already been charged for the purchase and your order is canceled, we shall promptly issue a credit to your credit or debit card account in the amount of the incorrect price.`,
    ],
  },
  {
    heading: "2. Fees",
    paragraphs: [
      `The customer agrees to pay the Company the fees as set forth in each applicable Order Confirmation or online checkout portal pursuant to the payment schedule contained therein. Customer acknowledges and agrees that any failure by Customer to make any timely payment(s) may result in Company suspending its provision of Services and restricting Customer's access to the Platform. The Parties agree that such suspension or restriction shall not be considered a breach of this Agreement or any Order Confirmation. All payments made to AMZHIVE for its services shall be processed by its designated payment processor. In the event that a refund is requested, claims must be submitted in writing to AMZHIVE within 30 days of the original payment date.`,
    ],
  },
  {
    heading: "3. Confidential Information",
    paragraphs: [
      `(a) Each Party hereto may be allowed access to the confidential or otherwise proprietary information of the other Party which is either (i) marked as confidential or proprietary or (ii) not marked or disclosed as confidential, but should reasonably be understood to be confidential due to the nature of the disclosed information and/or the circumstances surrounding disclosure. For the purposes of this Section 3, the Party that receives Confidential Information shall be referred to as the "Receiving Party" and the Party that discloses Confidential Information shall be referred to as the "Disclosing Party".`,
      `(b) Confidential Information shall include, but shall not be limited to, information relating to the Disclosing Party's business, finances, technology, products, pricing, services, strategies, customers, trade secrets, know-how, ideas and inventions, designs, drawings, specifications, and roadmaps. The Receiving Party agrees that it will maintain the secrecy of any Confidential Information disclosed by the Disclosing Party and shall not use any Confidential Information for any purpose other than the performance or receipt of Services hereunder.`,
      `(c) The term "Confidential Information" shall not include any information that is: (i) proven to be already known to or rightfully in the possession of the Receiving Party at the time of disclosure, (ii) publicly available or otherwise in the public domain through no breach of this Agreement, or (iii) rightfully obtained by the Receiving Party from any third party without restriction.`,
      `(d) Immediately upon termination of this Agreement or any applicable Order Confirmation, or at any time upon written request from the Disclosing Party, the Receiving Party agrees that it will immediately deliver or destroy all documents and materials containing any Confidential Information and provide a written certification of destruction.`,
    ],
  },
  {
    heading: "4. Term",
    paragraphs: [
      `The term of this Agreement shall commence as of the Effective Date set forth in the Order Confirmation or during the online checkout process and shall continue for as long as the Company provides the Services under each applicable Order. The Initial Term of each applicable Order shall automatically renew for additional periods of the same length until Customer notifies Company in writing (email to suffice) that it does not wish to renew, with at least fifteen (15) days notice prior to the end of the then-current Term.`,
    ],
  },
  {
    heading: "5. Termination",
    paragraphs: [
      `(a) Either Party may terminate this Agreement or any applicable Order in the event that the other Party commits a material breach and fails to cure such breach within fifteen (15) days following receipt of written notice of such breach.`,
      `(b) Either Party may terminate this Agreement if (i) the other Party files a petition in bankruptcy, insolvency, or like proceedings that is not stayed or discharged for a period of thirty (30) days, or (ii) if a receiver or trustee shall be appointed for the property and assets of either Party and not discharged for a period of thirty (30) days.`,
      `(c) In the event of early termination of any Term for any reason, except for a material breach by the Company which is not cured, the Customer acknowledges and agrees that it shall be required to pay all Fees for the remainder of the applicable Term.`,
      `(d) In the event this Agreement expires or is terminated for any reason, Customer acknowledges and agrees that Company has no obligation to retain any Customer Data.`,
    ],
  },
  {
    heading: "6. Accounts",
    paragraphs: [
      `The customer is solely responsible for all activity occurring under its Company account(s) as well as any account that the customer has with any retail operation — e.g., Amazon, Walmart, Shopify, etc. Customer shall abide by all applicable local, state, national, and foreign laws, treaties, and regulations in connection with its use of the Account and Merchant Accounts, including those related to data privacy, international communications, and the transmission of technical or personal data.`,
    ],
  },
  {
    heading: "7. Warranties",
    paragraphs: [
      `EXCEPT AS EXPRESSLY STATED HEREIN, THE SERVICES, THE PLATFORM AND ALL INFORMATION, CONTENT, MATERIALS AND PRODUCTS ACCESSIBLE THROUGH THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. COMPANY DOES NOT WARRANT THAT THE SERVICES ARE OR WILL BE ERROR-FREE, UNINTERRUPTED OR FREE FROM DEFECTS.`,
    ],
  },
  {
    heading: "8. Representations and Warranties",
    paragraphs: [
      `(a) Customer represents and warrants that: (i) the execution and performance of this Agreement and the use of the Platform and Services is not in violation of any applicable law, rule, or regulation; (ii) Customer has the right and power to enter into and perform the obligations under this Agreement; and (iii) Customer will use the Platform and Services solely for lawful purposes and in compliance with all applicable laws, rules, and regulations.`,
      `(b) Company represents and warrants that: (i) the execution and performance of this Agreement is not in violation of any applicable law, rule, or regulation; (ii) Company has the right and power to enter into and perform the obligations under this Agreement; and (iii) the Platform and Services do not infringe any third party's copyright, patent, trademark, trade secret, or other proprietary rights.`,
    ],
  },
  {
    heading: "9. Customer Data",
    paragraphs: [
      `(a) The term "Customer Data" shall include, without limitation, data related to advertising campaigns, inventory and pricing information, account performance, sales tax calculation, transaction settlement or any other data that Customer submits to the Platform in the course of using the Services.`,
      `(b) Customer hereby grants Company a worldwide, royalty-free, non-exclusive right to use, reproduce, create derivative works of, distribute, perform, transmit and publish Customer Data for the sole and exclusive purposes of (i) processing Customer Data in connection with providing the Service to Customer, and (ii) storing or hosting the Customer Data in a remote database or on the Platform for access by Customer. Customer Data is not shared with other customers or with any third party; provided that Company reserves the right to use Customer Data in order to compile, analyze and disclose aggregated metrics, data and trends as long as such metrics do not contain uniquely identifiable Customer Data.`,
      `(c) Customer shall have sole responsibility for the accuracy and quality of all Customer Data. Company shall not be responsible or liable for the deletion, correction, destruction, damage, loss or failure to store any Customer Data.`,
      `(d) Notwithstanding the foregoing, Customer acknowledges and agrees that Company may share non-personal and non-confidential identifiers, such as the advertiser or seller id, with third parties for purposes of troubleshooting and auditing.`,
    ],
  },
  {
    heading: "10. Privacy of Personal Information",
    paragraphs: [
      `Please consult the Company's Privacy Policy for information about the Company's practices and policies with respect to the collection, use and sharing of personal information, often referred to as personal data in the European Union.`,
    ],
  },
  {
    heading: "11. License",
    paragraphs: [
      `(a) Company hereby grants Customer a non-exclusive, non-transferable, limited, revocable, worldwide right to access the Platform and use the Services during the Term, solely for Customer's own internal business purposes, subject to the terms and conditions of this Agreement.`,
      `(b) Customer agrees it shall not (i) license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Services or the Platform; (ii) modify or make derivative works based upon the Service or Platform; (iii) embed the Service as an "iframe" or "frame" from within another application; or (iv) reverse engineer or access the Service or Platform in order to build a competitive product or service.`,
      `(c) Customer acknowledges and expressly agrees that the Services and Accounts cannot be shared or used by more than one individual unless the terms of the applicable Order Confirmation allow for sharing within Customer's internal organization. Sharing of access outside of the Customer's organization is not allowed without the express written permission of Company.`,
      `(d) Customer is solely responsible for maintaining the confidentiality of all usernames and passwords related to all Accounts. Customer may use the Service only for its internal business purposes and shall not: (i) send or store material containing software viruses, worms, Trojan horses or other harmful computer code; (ii) interfere with or disrupt the integrity or performance of the Service; (iii) attempt to gain unauthorized access to the Service or its related systems or networks; or (iv) take any action that imposes an unreasonably or disproportionately large load on Company's infrastructure.`,
    ],
  },
  {
    heading: "12. Proprietary Information",
    paragraphs: [
      `(a) All results and proceeds from Company's provision of Services hereunder including, without limitation, all copyrights, patents, trademarks, data, information and materials, owned, licensed or created by Company shall be owned by Company. In no instance shall any provision of any Proprietary Information by Company to Customer hereunder convey any ownership interest in the Proprietary Information to Customer.`,
      `(b) Customer agrees that Company shall have a gratis, royalty-free, worldwide, transferable, sub-licensable, irrevocable, perpetual license to use or incorporate into the Platform and Services any suggestions, enhancement requests, recommendations or other feedback provided by Customer, including those made by its employees, contractors or advisors.`,
    ],
  },
  {
    heading: "13. Indemnification",
    paragraphs: [
      `(a) Company agrees to defend, indemnify and hold harmless Customer, its subsidiaries and affiliates and their respective officers, directors, employees and agents from and against all costs, damages, claims and liabilities brought by third parties arising out of or related to: (i) any breach of this Agreement by Company which is not cured; (ii) any grossly negligent or willful act by Company; and (iii) any personal injury, death or property damage directly caused by Company.`,
      `(b) Customer agrees to defend, indemnify and hold harmless Company, its subsidiaries and affiliates and their respective officers, directors, employees and agents from and against all costs, damages, claims and liabilities arising out of or related to: (i) any breach of this Agreement by Customer which is not cured; (ii) any negligent or willful act or omission by Customer or its employees, contractors and/or subcontractors; or (iii) any personal injury, death or property damage caused by Customer, its employees or Customer's products or services.`,
    ],
  },
  {
    heading: "14. Limitation of Liability",
    paragraphs: [
      `(a) Each Party's entire liability under or in connection with this Agreement or any Order Confirmation, whether arising in contract, tort (including negligence and breach of statutory duty) or otherwise, shall not exceed the amounts of Fees actually paid by Customer to Company for the Services in the prior six (6) months from the date on which the claim arose.`,
      `(b) Company shall not be liable to Customer for any loss, damage or destruction of software or systems which may occur during the provision of Services, accessing the Platform or using the Software, except and only to the extent that it is solely caused by Company.`,
      `(c) IN NO EVENT WHATSOEVER SHALL EITHER PARTY BE LIABLE FOR ANY CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, SAVINGS, BUSINESS, BENEFITS, DATA, GOODWILL OR REVENUES OF ANY KIND, EVEN IF THE PARTY SO AFFECTED HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS.`,
    ],
  },
  {
    heading: "15. Governing Law, Jurisdiction & Venue",
    paragraphs: [
      `This Agreement and each Order Confirmation and its interpretation, performance, or any breach thereof, shall be construed in accordance with the laws of the state of Florida, USA (without giving regard to the conflict of laws rules thereof), applicable to contracts made and entirely performed therein. Venue and jurisdiction in any action involving, relating to, and/or arising from this Agreement shall lie solely and exclusively with the courts in the state of Florida, USA.`,
    ],
  },
  {
    heading: "16. Dispute Resolution",
    paragraphs: [
      `(a) Unless otherwise expressly set forth in an applicable Order Confirmation, the Parties will attempt in good faith to resolve any dispute arising out of the performance of or otherwise relating to this Agreement promptly by negotiations between executives who have authority to settle the controversy. Either Party may give the other Party written notice of any dispute not resolved in the normal course of business. Within twenty (20) days after delivery of said notice, executives of both Parties will meet at a mutually acceptable time and place to exchange relevant information and to attempt to resolve the dispute.`,
      `(b) Subject to Section 16(a), any dispute that might arise between the Parties relating to or arising from this Agreement shall be settled by binding arbitration in accordance with the then prevailing Commercial Arbitration Rules of the American Arbitration Association (AAA). Arbitration shall be conducted before a single arbitrator selected from the AAA's National Roster of Arbitrators. The arbitration shall be held in Boston, Massachusetts unless the Parties mutually agree upon an alternative location. The arbitration shall be conducted in English.`,
    ],
  },
  {
    heading: "17. Entire Agreement",
    paragraphs: [
      `This Agreement constitutes the entire agreement and supersedes any and all other understandings and agreements between the Parties with respect to the subject matter hereof. No representation, statement or promise not contained herein shall be binding on either party. Any Order Confirmation may only be modified by a written amendment that is signed by persons authorized to sign on behalf of each Party. The Parties agree that Company reserves the right to change, modify and/or update these Terms at any time.`,
    ],
  },
  {
    heading: "18. Independent Contractors",
    paragraphs: [
      `Company shall, at all times, be deemed to be an independent contractor and shall not be deemed to be an employee, agent, joint venturer, partner or representative of Customer, or be authorized or empowered to create any claim, debt or obligation on behalf of Customer.`,
    ],
  },
  {
    heading: "19. No Guarantee",
    paragraphs: [
      `Company makes no representation of any kind concerning the results of Customer's use of the Services or the Platform. Company makes no assurances as to any particular outcome, including increased income, sales, and/or any other outcome, based on the use of the Service, the Platform or any other products or services offered by the Company.`,
    ],
  },
  {
    heading: "20. Miscellaneous",
    paragraphs: [
      `The Parties acknowledge and agree that: (a) this Agreement shall inure to the benefit of and be binding upon the Parties hereto and to their respective successors and legal representatives; (b) no provisions of this Agreement or any Order Confirmation will be waived by any Party except in writing; (c) the waiver by any Party of a breach of any provision of this Agreement shall not operate or be construed as a waiver of any subsequent breach; (d) if any provision or application of this Agreement shall be held invalid or unenforceable, the remaining provisions shall remain valid and enforceable; and (e) this Agreement and any Order Confirmation may be signed in two or more counterparts, and all counterpart signature pages, taken together, shall constitute one executed original.`,
    ],
  },
];

export default function TermsConditionContent() {
  return (
    <>
      {/* Hero */}
      <section className="w-full" style={{ backgroundColor: "#e2e2e2" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16">
          <motion.p
            className="font-medium mb-4 tracking-wide"
            style={{ fontSize: "16px", color: "#1e293b" }}
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
              color: "#1e293b",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Terms &amp; <span style={{ color: "#E91C59" }}>Conditions</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          {/* Intro */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-semibold mb-4"
              style={{ fontSize: "15px", lineHeight: "1.8", color: "#1e293b" }}
            >
              Please read these TERMS AND CONDITIONS OF USE carefully. Your access to, purchase of
              and/or use of the Services (as defined below) constitutes your legally binding
              agreement to be bound by these Terms.
            </p>
            <p
              className="text-[#67768e]"
              style={{ fontSize: "15px", lineHeight: "1.8" }}
            >
              These Terms govern the user&apos;s use of the websites, platform, applications and
              software owned and/or operated by Amz Hive, to which these Terms are linked or
              referenced to, including all content, features and functionality, and related services
              (collectively, the &quot;Services&quot;). These Terms apply whether you are accessing
              the Services via a personal computer, wireless or mobile device, or any other
              technology or device. If you do not agree to these Terms, do not access or use the
              Services.
            </p>
          </motion.div>

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
                  color: "#1e293b",
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
