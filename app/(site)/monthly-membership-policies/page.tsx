import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Las Olas Yoga's Monthly Membership Policies.",
  title: "Membership Policies | Yoga Classes | Fort Lauderdale",
};

const MembershipPoliciesPage = () => {
  return (
    <section className="m-5 mt-30 lg:mx-35 lg:mb-10 lg:mt-35">
      <div>
        <h2 className="my-5 text-center text-sectiontitle3">
          Membership Policies
        </h2>
        <div className="space-y-3 text-sm leading-10">
          <p>
            <strong>UNLIMITED MEMBERSHIPS:</strong> Recurring monthly membership
            fee are on auto-pay. This membership provides monthly access to our
            yoga classes. In addition, members enjoy 10% discounts on retail and
            workshops, as well as complimentary access to members-only events.
            Annual memberships are paid in full for the year and are not on
            auto-renewal.
          </p>
          <p>
            <strong>LIMITED MEMBERSHIPS:</strong> Recurring monthly membership
            fee are on auto-pay. This membership provides access to four yoga
            classes per month. Unused classes are not rolled over to the next
            month. The month is based on the time of sign up, not the calendar
            month. Additional classes are charged at the drop-in rate.
          </p>
          <p>
            <strong>FREEZE POLICY:</strong> Members may put their membership on
            hold for no less than two (2) weeks and up to three (3) months twice
            a year. A fee of $20 per month may be charged for additional freeze
            requests. Notice of intent to freeze one’s account must be submitted
            to Las Olas Yoga via email at info@lasolas.yoga no less than seven
            (7) business days prior to the freeze date. The freeze request must
            state both the freeze start date and reactivation date. Members who
            provide insufficient notice cannot be guaranteed a timely stop on
            billing. Members will not be billed for memberships during the
            freeze period. Billing will resume automatically upon the end of
            freeze period.
          </p>
          <p>
            <strong>CLASS CANCELLATIONS:</strong> Class reservations may be
            canceled without penalty by canceling up to 2 hours prior to the
            class start time. This may be done online via the client’s account,
            or by calling the studio during regular operating hours and
            confirming with studio staff.
          </p>
          <p>
            <strong>WORKSHOP CANCELLATIONS:</strong> Workshop reservations may
            be canceled without penalty by canceling up to 24 hours prior to the
            workshop start time. This may be done online via the client’s
            account, or by calling the studio during regular operating hours and
            confirming with studio staff.
          </p>
          <p>
            <strong>APPOINTMENT CANCELLATIONS:</strong> Appointment reservations
            may be canceled without penalty by canceling up to 24 hours prior to
            the workshop start time. This may be done online via the client’s
            account, or by calling the studio during regular operating hours and
            confirming with studio staff.
          </p>
          <p>
            <strong>TERMINATION:</strong> Membership may be terminated at any
            time prior to the next billing cycle.
          </p>
          <p>
            <strong>CLASS SIGN-UP:</strong> Classes are to be reserved in
            advance to guarantee a spot in class.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPoliciesPage;
