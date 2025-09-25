import React from "react";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import DynamicAccordian from "../../molecules/DynamicAccordian/DynamicAccordian";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WineBarIcon from "@mui/icons-material/WineBar";
import { Typography } from "@mui/material";
import {
  ApplyLink,
  ApplyMailIcon,
  ApplyPaper,
  BoldSpan,
  HeadingBox,
  TitleLine,
} from "./Career.style";
import { DirectionsCar } from "@mui/icons-material";

const Career = () => {
  return (
    <>
      <PrivacyBaneer
        heading="Careers at Wine Outlet"
        description={`Welcome to Wine Outlet – New Jersey's well-known Fine Wine and Spirit shop.
We’re proud to offer some of the world's finest wines and spirits at competitive and affordable prices, both in-store and online.
We’re always looking for passionate and energetic individuals to join our successful journey. If you’re ready to contribute and grow with us, explore our current openings below and apply to the role that matches your skills.
📩 To apply, email your resume to work@wineoutlet.com`}
      />
      <HeadingBox>
        <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
          Current Openings
        </Typography>
        <TitleLine />
      </HeadingBox>
      <DynamicAccordian
        title="1. Retail Associates"
        icon={<StorefrontIcon />}
        content={
          <>
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Process purchases, returns, and exchanges.</li>
              <li>Ensure shelves are fully stocked and organized.</li>
              <li>Assist customers in finding merchandise.</li>
              <li>Handle customer complaints professionally.</li>
              <li>Maintain store cleanliness and presentation.</li>
              <li>
                Work collaboratively with team members to create a pleasant shopping environment.
              </li>
              <li>Report unusual incidents to management.</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Qualifications:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Must be 21+ years of age with a High School Diploma or GED.</li>
              <li>Must be available to work weekends.</li>
              <li>Retail and cash register experience preferred.</li>
              <li>Strong interpersonal and customer service skills.</li>
              <li>Good time management and attention to detail.</li>
              <li>Ability to lift 50 lbs.</li>
              <li>Honest, dependable, and a team player.</li>
            </ul>
          </>
        }
      />

      {/* Delivery Drivers / Stockers */}
      <DynamicAccordian
        title="2. Delivery Drivers / Stockers"
        icon={<DirectionsCar />}
        content={
          <>
            <h4 className="font-semibold mb-2">Driver Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Safely load, transport, and deliver items to customers.</li>
              <li>Verify orders before delivery for accuracy.</li>
              <li>Provide polite, courteous, and timely service.</li>
              <li>Follow assigned routes and schedules.</li>
              <li>Maintain safe driving records and comply with transportation laws.</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Stocker Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Stock shelves and displays according to standards.</li>
              <li>Mark items with identifying codes (e.g., price/stock).</li>
              <li>Retrieve items from stockroom as needed.</li>
              <li>Assist customers while on the retail floor.</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Job Requirements:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Must be 21+ years of age with High School Diploma or GED.</li>
              <li>Valid NJ driver’s license with a clean driving record.</li>
              <li>Must own/lease a reliable, insured vehicle.</li>
              <li>Ability to lift 50 lbs.</li>
              <li>Must be able to use the Drizly App and transact orders at register.</li>
              <li>Strong communication and customer service skills.</li>
              <li>Dependable, honest, and punctual.</li>
            </ul>
          </>
        }
      />

      {/* Manager / Assistant Manager */}
      <DynamicAccordian
        title="3. Manager / Assistant Manager"
        icon={<ManageAccountsIcon />}
        content={
          <>
            <p className="mb-2">
              We’re seeking a passionate, energetic, and customer-service oriented leader to oversee
              store operations.
            </p>
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Manage day-to-day operations.</li>
              <li>Drive sales and conduct sales analysis.</li>
              <li>Handle inventory management and ordering.</li>
              <li>Maintain fiscal accountability.</li>
              <li>Lead and mentor team members to achieve business goals.</li>
            </ul>
          </>
        }
      />

      {/* Wine Consultants */}
      <DynamicAccordian
        title="4. Wine Consultants"
        icon={<WineBarIcon />}
        content={
          <>
            <p className="mb-2">
              As a Wine Consultant, you’ll bring your passion for wine and customer service to help
              guests find the perfect bottle.
            </p>
            <h4 className="font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide expert wine knowledge and recommendations.</li>
              <li>Assist with tastings and customer engagement.</li>
              <li>Support sales and store promotions.</li>
              <li>Maintain strong product knowledge and stay updated on industry trends.</li>
            </ul>
          </>
        }
      />
      <ApplyPaper elevation={2}>
        <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
          How to Apply
        </Typography>
        <ApplyMailIcon />
        <Typography variant="body1" color="text.secondary" gutterBottom>
          📩 Send your resume and the position you’re applying for to:
        </Typography>
        <ApplyLink href="mailto:work@wineoutlet.com">work@wineoutlet.com</ApplyLink>
        <Typography variant="body1">
          Join us at <BoldSpan>Wine Outlet</BoldSpan> and be part of a team that values passion,
          professionalism, and growth.
        </Typography>
      </ApplyPaper>
    </>
  );
};

export default Career;
