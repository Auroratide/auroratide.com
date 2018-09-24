import React from 'react';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PageTitle from 'Client/components/layout/PageTitle';
import StandardTypography from 'Client/components/layout/StandardTypography';

const LegalPage = () =>
  <DocumentTitle title='Legal'>
    <Container>
      <ContentArea white>
        <StandardTypography>
          <PageTitle>Terms and Conditions</PageTitle>
          <p>All content provided on this site is for informational purposes only. The owner of this site makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The owner will not be liable for any errors or omissions in this information nor for the availability of this information. The owner will not be liable for any losses, injuries, or damages from the display or use of this information. These terms and conditions of use are subject to change at any time and without notice.</p>
          <PageTitle>Privacy Policy</PageTitle>
          <p>We do not share personal information with third-parties nor do we store information we collect about your visit to this blog for use other than to analyze content performance through the use of cookies, which you can turn off at anytime by modifying your internet browser&apos;s settings. We are not responsible for the republishing of the content found on this site on other websites or media without our permission. This privacy policy is subject to change without notice.</p>
        </StandardTypography>
      </ContentArea>
    </Container>
  </DocumentTitle>;

export default LegalPage;