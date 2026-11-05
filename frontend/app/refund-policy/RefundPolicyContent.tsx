"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "0px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
};

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <motion.div className="mb-10" {...fadeUp}>
      <h2
        className="font-bold mb-4"
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontSize: "clamp(18px, 2.5vw, 24px)",
          color: "#000000",
        }}
      >
        {heading}
      </h2>
      {children}
    </motion.div>
  );
}

function Para({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-[#67768e] mb-4 last:mb-0${className ? ` ${className}` : ""}`}
      style={{ fontSize: "15px", lineHeight: "1.8" }}
    >
      {children}
    </p>
  );
}

function UList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-[#67768e]" style={{ fontSize: "15px", lineHeight: "1.8" }}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function OList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal pl-6 space-y-2 text-[#67768e] italic" style={{ fontSize: "15px", lineHeight: "1.8" }}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

export default function RefundPolicyContent() {
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
            Refund <span style={{ color: "#ff9900" }}>Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">

          <Section heading="Terms of Engagement">
            <Para>
              By paying AMZ Pro Venture, and getting into a working relationship with them you are hereby
              agreeing to our terms of services listed below.
            </Para>
          </Section>

          <Section heading="Service Level Agreement">
            <Para>
              AMZ Pro Venture offers a 100% Satisfaction with its services. AMZ Pro Venture will continue to work
              with you providing you with work till you are satisfied or the project is completed.
            </Para>
            <UList
              items={[
                `Our unlimited revisions policy is to make sure that you are 100% satisfied.`,
                `We do not stop our revisions until you are completely satisfied with your design.`,
              ]}
            />
          </Section>

          <Section heading="100% Money Back Guarantee">
            <Para>
              AMZ Pro Venture offers a 100% Money Back Guarantee on all its design services. Customers can
              claim 100% of their money paid for the service back under the following circumstance:
            </Para>
            <UList
              items={[
                `If you are unsatisfied with the initial designs of the website or graphical assets, you can request a 100% refund on your project.`,
              ]}
            />
          </Section>

          <Section heading="Refund Policy">
            <Para>
              AMZ Pro Venture offers a 100% Refund on all its design services, however it is not an
              unconditional 100% refund and certain conditions still apply.
            </Para>
            <Para>The Refund Policy will be Void if:</Para>
            <UList
              items={[
                `The primary design concept (for any service) has been approved.`,
                `You have demanded revisions beyond the initial design concepts (logo or website).`,
                `The designs (logo or website) have been finalized.`,
                `The website has been designed, developed and deployed live.`,
                `The company has not been contacted for more than 2 weeks without notice.`,
                `Refunds are not applicable once the product hunting report has been reviewed and approved by the client.`,
                `Refunds will not be issued once the client has an approved and live marketplace(s) store setup for platforms such as Amazon, Wix, Etsy, Ebay, Walmart, Shopify or TikTok Shop.`,
                `In cases where a project is initiated via a deposit or partial payment, all such payments are strictly non-refundable while an outstanding balance remains.`,
                `If the project is placed on hold upon customer request, the refund will be voided.`,
                `Company's policies, or policy, have been violated.`,
                `Other companies or designers have been approached for the same project.`,
                `The creative brief is lacking in required information from the client end.`,
                `A complete design change has been demanded and provided.`,
                `The business is closing or changing name or business.`,
                `Reasons such as 'change of mind', 'disagreement with partner' or other reasons that do not pertain to the service provided will not be subject to refund under any circumstances.`,
                `Once a client has accepted multiple sets of revisions (for any service), refund will not be applicable.`,
                `Services not related to design services are not eligible for refunds under any circumstances. They are not covered under our 100% money back guarantee. If such a service is acquired as part of a Package Deal of any kind and through a 3rd Party Service Provider, they cannot be used to request a refund on the entire package.`,
              ]}
            />
            <Para className="mt-4 italic">Examples of such services that are not eligible for refund are:</Para>
            <OList
              items={[
                `Website & Emails Hosting Services.`,
                `Website SSL Certificates.`,
                `Website Domain Purchase.`,
                `Website Maintenance Plans.`,
                `Website SEO Plans.`,
                `Social Media Marketing.`,
                `Google AdWords Campaigns.`,
                `VPS Services.`,
                `Software and Tools for Product Hunting, Automation, AI Use Cases & Email Marketing/Automation.`,
              ]}
            />
          </Section>

          <Section heading="Claim Your Refund">
            <Para>To claim your refund, please follow any of the following steps:</Para>
            <UList
              items={[
                `All payments made to AMZ Pro Venture for its services shall be processed by its designated payment processor. In the event that a refund is requested, claims must be submitted in writing to AMZ Pro Venture within 30 days of the original payment date.`,
                `Dial our number +1 (802) 209-6796 and speak with your respective Project Manager to initiate a refund.`,
                `Send an Email to your Project Manager to initiate a refund.`,
                `If a client subscribes for a service bundle and happens to be dissatisfied with a particular service, refund will only be applicable on that particular service and not the entire bundle.`,
                `The client may be entitled to claim 50% of the refund after discussion with their Project Manager.`,
                `Please be advised that 35% administration charges will be applicable on all orders canceled within 24 hours, if they are not initiated. Furthermore, the refund policy will be void in case there's a change of mind.`,
                `Cancellations of orders prior to project initiation due to reasons unrelated to the design service itself will be subjected to a 35% cancellation administrative fee.`,
                `The refund approval will be at discretion of AMZ Pro Venture Management.`,
                `Management's decision on the matter will be final.`,
              ]}
            />
            <div className="mt-6 space-y-4">
              <Para>
                As soon as we receive your refund request, we will respond to it at our earliest.
                Once the required analysis is completed we will initiate the process according to our
                refund policy stated above. The refund will be issued to the original payment method
                used to make the purchase.
              </Para>
              <Para>
                To cancel a project prior to project initiation due to reason unrelated to the
                service itself, the refund request must be made within 24 hours of order placement
                in order to receive a full refund. Failing to do so will result in receiving a
                service fee charge if a cancellation is requested after the initial 24 hours.
              </Para>
              <Para>
                After you have received your refund, you will not have any rights to any designs
                submitted by AMZ Pro Venture, unless mutually agreed with by the company and the customer
                through written agreement.
              </Para>
            </div>
          </Section>

          <Section heading="Links to External Sites">
            <Para>
              Our Service may contain links to external sites that are not operated by us. If you
              click on a third party link, you will be directed to that third party&apos;s site. We
              strongly advise you to review the Privacy Policy and the terms and conditions of every
              site you visit.
            </Para>
            <Para>
              We have no control over and assume no responsibility for the content, privacy policies
              or practices of any third party sites, products or services.
            </Para>
          </Section>

          <Section heading="Quality Assurance Policy">
            <Para>
              AMZ Pro Venture will do its best to meet your requirements and our designers do their best to
              fulfill your expectations. We believe in providing the best designs and each of our
              designs is well researched and well crafted.
            </Para>
          </Section>

          <Section heading="Delivery Policy">
            <UList
              items={[
                `The complete order will be sent to the mentioned account on the date stated on Order Confirmation and a confirmation email will also be sent.`,
                `The turnaround time will be according to the package; the minimum time required is 5 business days.`,
              ]}
            />
          </Section>

          <Section heading="Contact Us">
            <Para>
              If you have any questions about this Refund Policy, please contact us via email or
              phone.
            </Para>
            <Para>
              Email:{" "}
              <a
                href="mailto:info@amzproventure.com"
                className="text-[#ff9900] hover:underline"
              >
                info@amzproventure.com
              </a>
            </Para>
          </Section>

        </div>
      </section>
    </>
  );
}
