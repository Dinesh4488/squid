import React from 'react';
import './DashboardMockup.css';

const DashboardMockup = () => {
  return (
    <div className="dashboard-mockup-container">
      <div className="dashboard-grid">
        {/* Left Panel - List with Avatar at bottom */}
        <div className="dashboard-card card-left">
          <div className="card-logo-top">
            <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="#313139" />
            </svg>

          </div>


          <div className="list-items-section">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="list-item-row">
                <div className="checkbox-square"></div>
                <div className="text-lines">
                  <div className="text-line-long"></div>
                  <div className="text-line-short"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="avatar-footer">
            <div className="avatar-circle">
              <div className="avatar-inner"></div>
            </div>
            <div className="footer-text-lines">
              <div className="footer-text-line"></div>
              <div className="footer-text-line-small"></div>
            </div>
          </div>
        </div>

        {/* Center Top - Circular Progress */}
        <div className="dashboard-card card-center-top">
          <div className="minimal-header">
            <div className="header-lines-small">
              <div className="tiny-line"></div>
              <div className="tiny-line"></div>
            </div>
            <div className="header-square-small"></div>
          </div>

          <div className="progress-circle-wrapper">
            <svg className="progress-svg" width="160" height="160" viewBox="0 0 160 160">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9898" />
                  <stop offset="100%" stopColor="#8054FF" />
                </linearGradient>
              </defs>

              {/* Outer dark circle background */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="#2a2a2e"
                strokeWidth="14"
              />

              {/* Gradient progress arc */}
              <circle
                cx="80"
                cy="80"
                r="65"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="14"
                strokeDasharray="408"
                strokeDashoffset="102"
                strokeLinecap="round"
                transform="rotate(-90 80 80)"
              />
            </svg>

            {/* Inner circles */}
            <div className="progress-inner-circles">
              <div className="inner-ring"></div>
              <div className="inner-core"></div>
            </div>
          </div>
        </div>

        {/* Right Top - User List */}
        <div className="dashboard-card card-right-top">
          <div className="minimal-header">
            <div className="header-lines-small">
              <div className="tiny-line"></div>
              <div className="tiny-line"></div>
            </div>
            <div className="header-square-small"></div>
          </div>

          <div className="users-list">
            {[1, 2, 3, 4].map((user) => (
              <div key={user} className="user-row">
                <div className="user-avatar-circle">
                  <div className="user-avatar-inner"></div>
                </div>
                <div className="user-text-lines">
                  <div className="user-text-line"></div>
                  <div className="user-text-line-short"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Bottom - Bar Chart */}
        <div className="dashboard-card card-center-bottom">
          <div className="minimal-header">
            <div className="header-lines-small">
              <div className="tiny-line"></div>
              <div className="tiny-line"></div>
            </div>
            <div className="header-square-small"></div>
          </div>

          <div className="bars-chart">
            <svg width="172" height="94" viewBox="0 0 172 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.32 83.68V9.66C19.32 4.32493 14.9951 0 9.66 0C4.32493 0 0 4.32492 0 9.66V83.68C0 89.0151 4.32493 93.34 9.66 93.34C14.9951 93.34 19.32 89.0151 19.32 83.68Z" fill="#313139" />
              <path d="M12.49 79.6799H6.83C3.05789 79.6799 0 82.7378 0 86.5099C0 90.282 3.05789 93.3399 6.83 93.3399H12.49C16.2621 93.3399 19.32 90.282 19.32 86.5099C19.32 82.7378 16.2621 79.6799 12.49 79.6799Z" fill="#313139" />
              <path d="M141.32 83.68V9.66C141.32 4.32493 136.995 0 131.66 0C126.325 0 122 4.32492 122 9.66V83.68C122 89.0151 126.325 93.34 131.66 93.34C136.995 93.34 141.32 89.0151 141.32 83.68Z" fill="#313139" />
              <path d="M171.75 83.68V9.66C171.75 4.32493 167.425 0 162.09 0C156.755 0 152.43 4.32492 152.43 9.66V83.68C152.43 89.0151 156.755 93.34 162.09 93.34C167.425 93.34 171.75 89.0151 171.75 83.68Z" fill="#313139" />
              <path d="M49.6999 83.68V9.66C49.6999 4.32493 45.375 0 40.0399 0C34.7048 0 30.3799 4.32492 30.3799 9.66V83.68C30.3799 89.0151 34.7048 93.34 40.0399 93.34C45.375 93.34 49.6999 89.0151 49.6999 83.68Z" fill="#313139" />
              <path d="M80.08 83.68V9.66C80.08 4.32493 75.7551 0 70.42 0C65.0849 0 60.76 4.32492 60.76 9.66V83.68C60.76 89.0151 65.0849 93.34 70.42 93.34C75.7551 93.34 80.08 89.0151 80.08 83.68Z" fill="#313139" />
              <path d="M110.46 83.68V9.66C110.46 4.32493 106.135 0 100.8 0C95.4651 0 91.1401 4.32492 91.1401 9.66V83.68C91.1401 89.0151 95.4651 93.34 100.8 93.34C106.135 93.34 110.46 89.0151 110.46 83.68Z" fill="#313139" />
              <path d="M171.75 83.6701V28.7801C171.75 23.445 167.425 19.1201 162.09 19.1201C156.755 19.1201 152.43 23.4451 152.43 28.7801V83.6701C152.43 89.0052 156.755 93.3301 162.09 93.3301C167.425 93.3301 171.75 89.0052 171.75 83.6701Z" fill="url(#paint0_linear_408_1707)" />
              <path d="M141 83.5V38.5C141 33.2533 136.747 29 131.5 29C126.253 29 122 33.2533 122 38.5V83.5C122 88.7467 126.253 93 131.5 93C136.747 93 141 88.7467 141 83.5Z" fill="url(#paint1_linear_408_1707)" />
              <path d="M110 83.5V54.5C110 49.2533 105.747 45 100.5 45C95.2533 45 91 49.2533 91 54.5V83.5C91 88.7467 95.2533 93 100.5 93C105.747 93 110 88.7467 110 83.5Z" fill="url(#paint2_linear_408_1707)" />
              <path d="M80 83.5V66.5C80 61.2533 75.7467 57 70.5 57C65.2533 57 61 61.2533 61 66.5V83.5C61 88.7467 65.2533 93 70.5 93C75.7467 93 80 88.7467 80 83.5Z" fill="url(#paint3_linear_408_1707)" />
              <path d="M41 75H40C35.0294 75 31 79.0294 31 84C31 88.9706 35.0294 93 40 93H41C45.9706 93 50 88.9706 50 84C50 79.0294 45.9706 75 41 75Z" fill="url(#paint4_linear_408_1707)" />
              <defs>
                <linearGradient id="paint0_linear_408_1707" x1="163.5" y1="3.00009" x2="193.116" y2="19.2609" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9898" />
                  <stop offset="1" stop-color="#8054FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_408_1707" x1="132.887" y1="15.0978" x2="160.117" y2="32.1472" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9898" />
                  <stop offset="1" stop-color="#8054FF" />
                </linearGradient>
                <linearGradient id="paint2_linear_408_1707" x1="101.887" y1="34.5734" x2="124.225" y2="53.2213" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9898" />
                  <stop offset="1" stop-color="#8054FF" />
                </linearGradient>
                <linearGradient id="paint3_linear_408_1707" x1="71.8867" y1="49.18" x2="88.8168" y2="68.0245" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9898" />
                  <stop offset="1" stop-color="#8054FF" />
                </linearGradient>
                <linearGradient id="paint4_linear_408_1707" x1="41.8867" y1="71.09" x2="48.2512" y2="85.2583" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9898" />
                  <stop offset="1" stop-color="#8054FF" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>

        {/* Right Bottom - Empty Card */}
        <div className="dashboard-card card-right-bottom">
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;