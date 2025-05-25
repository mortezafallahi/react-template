import { Outlet, useMatches } from 'react-router';

const DashboardLayout = () => {
  const matches = useMatches();

  document.title = matches?.at(-1)?.handle?.title ?? 'داشبورد';

  return (
    <>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
