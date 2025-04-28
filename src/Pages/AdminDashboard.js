import React from 'react';

// Example items (you can fill them properly)
const NavItems = ["home-alt1", "user", "settings"];
const FooterItems = ["gear", "log-out"];
const InnerItems = [
  {
    name: "Dashboard",
    icon: "dashboard", // corrected typo
  },
];

// Icon component
const Icon = ({ icon }) => <i className={`ai-${icon}`} />;

// Button component
const Button = ({ item }) => (
  <button type="button">
    <Icon icon={item.icon} />
    <p>{item.name}</p>
  </button>
);

// Header component
const Header = () => (
  <header>
    <div>
      <h2>Untitled UI</h2>
      <h3>store.Untitledui.com</h3>
    </div>
    <Icon icon="chevron-vertical" />
  </header>
);

// AdminDashboard component
const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <section>
        {InnerItems.map((item, index) => (
          <Button key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default AdminDashboard;
