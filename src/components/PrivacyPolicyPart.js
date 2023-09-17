import React from 'react';
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

const PrivacyPolicyPart = () => {
  return (

    <div>
      {" "}
      <div style={{ width: "100%", minHeight: "93vh", overflow: "hidden" }}>
        <div className="flex flex-col w-full justify-center items-center mt-28 py-12">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold text-center"
            style={{ fontWeight: "700!important" }}
          >
            PRIVACY POLICY
          </h1>
        </div>
        <div className="flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#8945F8]"
            title="INTRODUCTION:"
            icon={<BiCollection fontSize={21} className="text-white" />}
            subtitle="Welcome to Dubx Mobile Wallet, a free, open-source, client-side tool for interacting with the blockchain. Dubx Mobile Wallet, Inc. values privacy and we make a concerted effort to minimize and, to the extent possible, eliminate the exposure of personal data during the use of our interface. Dubx Mobile Wallet does not collect, hold, or store keys, account information, or passwords. We do not collect data passively, do not monetize the collection of data, and do not use your data for marketing or advertising.
                To the extent we collect any personal information, this privacy policy (“Policy”) describes how Dubx Mobile Wallet collects, uses, and shares personal information of people who use our mobile application, or otherwise use our services (collectively, the “Services”).
                This Policy applies to anyone who accesses the Services. Please read the Policy carefully to understand our practices regarding your information and how we will treat it. By visiting the Site, App, and/or using the Services, you acknowledge that the collection, use, and sharing of your information will take place as described in this Policy.
                So that we are clear about the terminology we are using, when we use the phrase “Personal Information” in this Privacy Policy, we mean information about an individual that (either by itself or when combined with information from other available sources) allows that individual to be identified, including, the individual’s name, telephone number, or e-mail address."/>
          <ServiceCard
            color="bg-[#22efeb]"
            title="THE BLOCKCHAIN:"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Due to the inherent transparency of many blockchains, including the DUBX Blockchain, transactions that individuals broadcast via Dubx Mobile Wallet may be publicly accessible. This includes, but is not limited to, your public sending address, the public address of the receiver, the amount sent or received, and any other data a user has chosen to include in a given transaction. Information stored on a blockchain may be public, immutable, and difficult or even impossible to remove or delete. Transactions and addresses may reveal information about the user’s identity and information can potentially be correlated now or in the future by any party who chooses to do so, including law enforcement. Users are encouraged to review how privacy and transparency on the blockchain works."/>
          <ServiceCard
            color="bg-[#dd39c1]"
            title="WHAT WE COLLECT:"
            icon={<BiDna fontSize={21} className="text-white" />}
            subtitle="We collect information about you as described below. We use this information to enhance your experience with our Services."/>
          <ServiceCard
            color="bg-[#4157e7]"
            title="Information You Provide:"
            icon={<BiCool fontSize={21} className="text-white" />}
            subtitle="We may collect Personal Information you choose to provide to us. For example, when you contact us for support through the Services, you give us with your e-mail address and any other information that you choose to provide. Also, if you participate in a Dubx Mobile Wallet offer, give-away, or promotion (“Promotion”), you provide your name, e-mail address, and mailing address."/>
          <ServiceCard
            color="bg-[#F57F17]"
            title="DUBX Do Not Track Disclosures:"
            icon={<BiDetail fontSize={21} className="text-white" />}
            subtitle="Dubx Mobile Wallet does not track users over time and across third party websites to provide targeted advertising and therefore does not respond to Do Not Track (DNT) signals."/>
          <ServiceCard
            color="bg-[#05c552]"
            title="USE OF INFORMATION:"
            icon={<BiAtom fontSize={21} className="text-white" />}
            subtitle="We use the information that we have about you to provide support and certain Services to you.
                We may use the Personal Information we collect from and about you to (1) provide you with information or services that you request from us, including to respond to your comments, questions, and/or provide customer service; (2) monitor and analyze usage and trends and personalize and improve the Services and your experience using the Services; and (3) for any other purpose with your consent."/>
          <ServiceCard
            color="bg-[#6495ed]"
            title="SHARING OF PERSONAL INFORMATION:"
            icon={<BiEdit fontSize={21} className="text-white" />}
            subtitle="We will not disclose your Personal Information other than as described below, and we do not and will not sell your Personal Information to anyone.
                We may share the Personal Information we collect from and about you (1) to fulfill the purpose for which you provided it; (2) with your consent; (3) for legal, protection, and safety purposes; (4) to comply with any court order, law, or legal process, including to respond to any government or regulatory request; (5) to protect the rights of Dubx Mobile Wallet, our agents, customers, and others, including by enforcing our agreements, policies, and terms of service; and (6) with those who need it to do work for us (our Service Providers, as defined below)"/>
          <ServiceCard
            color="bg-[#ffc107]"
            title="Service providers:"
            icon={<HiKey fontSize={21} className="text-white" />}
            subtitle="We may contract with third parties to perform functions related to the Services (“Service Providers”). In general, Service Providers will have access to your Personal Information only to the extent needed to perform their business functions but may not use or share that personal information for purposes outside the scope of their functions related to the Services."/>
          <ServiceCard
            color="bg-[#7fffd4]"
            title="LINKS TO OTHER SITES:"
            icon={<HiCollection fontSize={21} className="text-white" />}
            subtitle="The Services contain links to other third-party websites or applications. Once you click on such a link and leave the Site or are redirected to a third-party website or application, you are no longer governed by this Policy. Any information you provide on those sites is subject to that third party’s privacy policy and we are not responsible for the privacy and security practices and policies of those third-party sites or applications."
          />
          <ServiceCard
            color="bg-[#b494f3]"
            title="OUR COMMITMENT TOWARDS CHILDREN'S PRIVACY:"
            icon={<HiAcademicCap fontSize={21} className="text-white" />}
            subtitle="We do not direct the Services to, nor do we knowingly collect any Personal Information from children under 13. Children under 13 are not eligible to use the Services. If we learn that someone using our Services is under 13 years of age, we will take steps to remove any Personal Information from our database and to prevent them from utilizing the Services."
          />
          <ServiceCard
            color="bg-[#f10ae0]"
            title="SECURITY OF YOUR PERSONAL INFORMATION & RIGHTS:"
            icon={<HiEye fontSize={21} className="text-white" />}
            subtitle="We are committed to protecting the security of Personal Information. We have taken certain physical, administrative, and technical steps to help safeguard the information we collect from and about you. While we take steps to help ensure the integrity and security of our network and systems, we cannot guarantee our security measures.

                In certain circumstances, you will also have the following rights:

                Right to access: the right to request certain information about, access to and copies of any Personal Information about you that we are holding (please note that you are entitled to request one copy of the Personal Information that we hold about you at no cost, but for any further copies, we reserve the right to charge a reasonable fee based on administration costs);
                Right to rectification: the right to have your Personal Information rectified if it is inaccurate or incomplete;
                Right to erasure/“right to be forgotten”: where the processing of your information is based on your consent, the right to withdraw that consent and the right to request that we delete or erase your Personal Information from our systems (however, this will not apply if we are required to hold on to the information for compliance with any legal obligation, or if we require the information to establish or defend any legal claim);
                Right to restriction of use of your information: the right to stop us from using your Personal Information or limit the way in which we can use it;
                Right to data portability: the right to request that we return any information you have provided in a structured, commonly used, and machine-readable format, or that we send it directly to another company, where technically feasible; and
                Right to object: the right to object to our use of your Personal Information including where we use it for our legitimate interests.
                Requests in relation to the above rights should be sent to: privacy@arabianchain.org"
          />
          <ServiceCard
            color="bg-[#b494f3]"
            title="Legal Basis for Processing:"
            icon={<HiAcademicCap fontSize={21} className="text-white" />}
            subtitle="The following legal bases apply to the ways in which we use and share an individual’s Personal Information:
                We rely on an individual’s consent to process Personal Information to provide support and/or carry out Promotions. This consent can be withdrawn at any time.
                We also process the information provided by an individual in our legitimate interests in ensuring our business is conducted legitimately and to a high standard."
          />
          <ServiceCard
            color="bg-[#4157e7]"
            title="RETENTION:"
            icon={<BiCollection fontSize={21} className="text-white" />}
            subtitle="We will retain the information you provide to process your request, provide support, and/or carry out and fulfill our Promotions. If you request support, we will retain your information for no longer than six (6) months. If you participate in a Promotion, we will retain your information until the Promotion is carried out and ninety (90) days after any prize, reward, or offer is fulfilled. Your Personal Information will then be deleted."
          />
          <ServiceCard
            color="bg-[#ffc107]"
            title="CONTACT INFORMATION:"
            icon={<BiDetail fontSize={21} className="text-white" />}
            subtitle="We welcome your comments or questions about this Policy. You may contact us at privacy@arabianchain.org"
          />
          <ServiceCard
            color="bg-[#05c552]"
            title="CHANGES TO PRIVACY POLICY:"
            icon={<HiEye fontSize={21} className="text-white" />}
            subtitle="We may modify this Policy from time to time. If we make any changes, we will change the Last Updated date above. We also may provide additional notice, as applicable, depending on the type of change. If you object to any changes, you may stop using the Services. Your continued use of the Services after we publish or otherwise provide notice about our changes to the Policy means that you are consenting to the updated policy."
          />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPart;