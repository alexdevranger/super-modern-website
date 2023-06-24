import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiCool } from "react-icons/bi";
import { BiDetail } from "react-icons/bi";
import { BiDna } from "react-icons/bi";
import { BiCollection } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiAtom } from "react-icons/bi";
import { HiCollection } from "react-icons/hi";
import { HiKey } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiEye } from "react-icons/hi";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism1 p-3 hover:shadow-xl mt-[40px]">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm">{subtitle}</p>
    </div>
  </div>
);

const DisclaimerPart = () => {
  return (
    <div>
      {" "}
      <div style={{ width: "100%", minHeight: "93vh", overflow: "hidden" }}>
        <div className="flex flex-col w-full justify-center items-center mt-28 py-12">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold text-center"
            style={{ fontWeight: "700!important" }}
          >
            DISCLAIMER
          </h1>
        </div>
        <div className="flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#8945F8]"
            title="Legal Disclaimer:"
            icon={<BiCollection fontSize={21} className="text-white" />}
            subtitle="By accessing and using Arabianchain Technologies’ services, users acknowledge and agree to the terms and conditions outlined in this legal disclaimer. It is recommended that users review this disclaimer periodically, as it may be subject to updates or modifications. In the event of any discrepancies between this legal disclaimer and other agreements or terms provided by Arabianchain Technologies, the terms of this legal disclaimer shall prevail."
          />
          <ServiceCard
            color="bg-[#22efeb]"
            title="Investment Risks:"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="All investments involve inherent risks, and investing through Arabianchain Technologies is no exception. The value of investments can fluctuate, and past performance is not indicative of future results. Investors should carefully consider their investment objectives, and risk tolerance, and consult with their financial advisors before making any investment decisions."
          />
          <ServiceCard
            color="bg-[#dd39c1]"
            title="Compliance with Regulations:"
            icon={<BiDna fontSize={21} className="text-white" />}
            subtitle="Arabianchain Technologies adheres to the regulatory requirements governing blockchain services. However, it is the responsibility of each user to ensure compliance with their local regulations and laws regarding investments and financial transactions. Users should be aware of the legal and regulatory frameworks applicable in their jurisdiction and assess the permissibility of engaging with Arabianchain Technologies's services accordingly."
          />
          <ServiceCard
            color="bg-[#4157e7]"
            title="Third-Party Services:"
            icon={<BiCool fontSize={21} className="text-white" />}
            subtitle="Arabianchain Technologies may provide access to or facilitate the use of third-party services, such as payment processors or investment platforms, to enhance the user experience. However, the use of such third-party services is subject to their respective terms and conditions, privacy policies, and any associated risks. Arabianchain Technologies shall not be held liable for the actions, omissions, or services provided by third party providers."
          />
          <ServiceCard
            color="bg-[#F57F17]"
            title="Information Accuracy:"
            icon={<BiDetail fontSize={21} className="text-white" />}
            subtitle="While Arabianchain Technologies strives to provide accurate and up-to-date information, the content presented on its platform, including but not limited to investment opportunities, market data, and financial analyses, is provided for informational purposes only. Users should independently verify any information and conduct their own due diligence before making any investment decisions."
          />
          <ServiceCard
            color="bg-[#05c552]"
            title="Limitation of Liability:"
            icon={<BiAtom fontSize={21} className="text-white" />}
            subtitle="Arabianchain Technologies shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of its services, including but not limited to financial losses, disruptions, or inaccuracies. Users bear sole responsibility for their investment decisions and actions taken based on the information provided by Arabianchain Technologies."
          />
          <ServiceCard
            color="bg-[#6495ed]"
            title="User Responsibility:"
            icon={<BiEdit fontSize={21} className="text-white" />}
            subtitle="Users are responsible for maintaining the confidentiality and security of their account credentials, ensuring the accuracy of personal information provided, and promptly notifying Arabianchain Technologies of any unauthorized access or suspicious activities related to their account."
          />
          <ServiceCard
            color="bg-[#ffc107]"
            title="Privacy and Data Protection:"
            icon={<HiKey fontSize={21} className="text-white" />}
            subtitle="Arabianchain Technologies is committed to protecting user data and complies with applicable privacy laws. For detailed information on data handling practices, please refer to our privacy policy, which outlines how user data is collected, stored, and processed."
          />
          <ServiceCard
            color="bg-[#7fffd4]"
            title="Dispute Resolution:"
            icon={<HiCollection fontSize={21} className="text-white" />}
            subtitle="Any disputes arising from the use of Arabianchain Technologies’ services shall be governed by and construed in accordance with the laws of Kingdom of Bahrain. The parties agree to submit to the exclusive jurisdiction of the courts in Kingdom of Bahrain the resolution of any such disputes. Alternative dispute resolution mechanisms, such as arbitration or mediation, may also be employed as agreed upon by both parties."
          />
          <ServiceCard
            color="bg-[#b494f3]"
            title="Applicable Laws:"
            icon={<HiAcademicCap fontSize={21} className="text-white" />}
            subtitle="The terms and conditions outlined in this legal disclaimer, as well as any agreements or transactions facilitated by Arabianchain Technologies, are subject to and governed by the laws of Kingdom of Bahrain. Users are responsible for complying with all relevant laws, regulations, and guidelines applicable in their jurisdiction regarding investments and financial transactions."
          />
          <ServiceCard
            color="bg-[#f10ae0]"
            title="Risk Disclosures:"
            icon={<HiEye fontSize={21} className="text-white" />}
            subtitle="Investing through Arabianchain Technologies involves certain inherent risks that users should carefully consider. These risks include but are not limited to market volatility, regulatory changes, and potential financial losses. Users should assess their investment objectives, risk tolerance, and consult with financial advisors to make informed investment decisions."
          />
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPart;
