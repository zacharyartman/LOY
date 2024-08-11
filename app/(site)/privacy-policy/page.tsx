import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <section className="m-5 mt-30 lg:m-30"><div><h2 className="text-sectiontitle3 text-center">Privacy Policy</h2>
    <div className="text-regular">
    <p>By using the site, you are accepting the practices described in this privacy policy. These practices may be changed, but any changes will be posted and changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used.</p>
    <p><strong>Collection of Information</strong></p>
    <p>We collect personally identifiable information, like names, email addresses, and phone numbers when voluntarily submitted by our visitors. The information you provide is used only to fulfill your specific request, unless you give us permission to use it in another manner.</p>
    <p><strong>Cookie/Tracking Technology</strong></p>
    <p>The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology., However, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.</p>
    <p><strong>Distribution of Information</strong></p>
    <p>We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when: (1) permitted or required by law; or, (2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, (3) investigating fraud which has already taken place. The information is not provided to these companies for marketing purposes.</p>
    <p><strong>Commitment to Data Security</strong></p>
    <p>Your personally identifiable information is kept secure. Only authorized employees, agents and contractors who have agreed to keep information secure and confidential have access to this information. All emails and newsletters from this site allow you to opt-out of further mailings.</p>
    <p><strong>Privacy Contact Information</strong></p>
    <p>If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below:</p>
    <p>By e-mail: <a href="mailto:info@lasolas.yoga">info@lasolas.yoga</a></p>
    <p>By Phone: 954-372-5275</p>
    </div>
    </div></section>
    
  );
};

export default PrivacyPolicyPage;
