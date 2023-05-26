import Layout from "@j2w/consultant/components/layouts/Layout";
import LoginForm from "@j2w/shared-frontend/components/modules/common/LoginDetails/Loginform";

export default function LoginPage() {
  return (
    <Layout display="flex" alignItems="center" justifyContent="center">
      {/* <Typography variant="body1">Login</Typography> */}
      <LoginForm />
    </Layout>
  );
}
