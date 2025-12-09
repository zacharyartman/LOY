import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Retreat Terms and Conditions for Las Olas Yoga.",
  title: "Retreat Terms & Conditions - Las Olas Yoga",
};

const RetreatTermsPage = () => {
  return (
    <section className="m-5 mt-30 lg:mx-35">
      <div>
        <h2 className="my-5 text-center text-sectiontitle3">
          Retreat Terms &amp; Conditions
        </h2>
        <div className="text-regular leading-10">
          <p>
            <small>
              <strong>Payments &amp; Deposits</strong>
            </small>
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <small>
                A non-refundable deposit is required to reserve your spot.
              </small>
            </li>
            <li className="mb-2">
              <small>
                All remaining balances must be paid in full no later than 75
                days before the retreat start date.
              </small>
            </li>
            <li className="mb-2">
              <small>
                If full payment is not received by the due date, your
                reservation may be forfeited, and your spot offered to someone
                on the waitlist.
              </small>
            </li>
          </ul>

          <p className="mt-6">
            <small>
              <strong>Cancellations &amp; Transfers</strong>
            </small>
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <small>
                All payments, including deposits and installments, are
                non-refundable.
              </small>
            </li>
            <li className="mb-2">
              <small>
                If you are unable to attend, you may transfer your reservation
                to another person with written notice to Las Olas Yoga at least
                30 days prior to the retreat.
              </small>
            </li>
            <li className="mb-2">
              <small>
                No credits or refunds will be issued for any reason, including
                illness, injury, or unexpected circumstances. We strongly
                encourage purchasing travel insurance to protect your
                investment.
              </small>
            </li>
          </ul>

          <p className="mt-6">
            <small>
              <strong>Travel Requirements</strong>
            </small>
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <small>
                For international retreats, a valid passport is required. Please
                ensure it will not expire within six months of your travel
                dates.
              </small>
            </li>
            <li className="mb-2">
              <small>
                We highly recommend Global Entry or TSA PreCheck to simplify
                airport travel.
              </small>
            </li>
            <li className="mb-2">
              <small>
                Travel insurance is strongly advised and may cover unexpected
                trip interruptions, cancellations, medical expenses, or delays.
              </small>
            </li>
          </ul>

          <p className="mt-6">
            <small>
              <strong>Retreat Changes</strong>
            </small>
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <small>
                Las Olas Yoga reserves the right to make changes to the retreat
                schedule, instructors, or included activities if necessary due
                to weather, safety, or other circumstances beyond our control.
              </small>
            </li>
            <li className="mb-2">
              <small>
                In the unlikely event that the retreat must be canceled by Las
                Olas Yoga, participants will receive a full refund of payments
                made, excluding personal travel or insurance expenses.
              </small>
            </li>
          </ul>

          <p className="mt-6">
            <small>
              <strong>Assumption of Risk</strong>
              <br />
              By reserving your spot, you acknowledge that participation in
              yoga, travel, and related activities involves inherent risks. You
              agree to assume full responsibility for your health and
              well-being during the retreat and release Las Olas Yoga and its
              instructors from any liability related to your participation.
            </small>
          </p>

          <p className="mt-6">
            <small>
              <strong>Agreement</strong>
              <br />
              By submitting your deposit or payment, you confirm that you have
              read, understood, and agreed to these terms and conditions.
            </small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RetreatTermsPage;