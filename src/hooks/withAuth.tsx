import { isLoggedIn } from "@/services/actions/auth.services";
import { setToLocalStorage } from "@/utils/local-storage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithAuth: React.FC<P> = (props) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn()) {
        // Store the requested URL in localStorage
        setToLocalStorage({ key: "redirectUrl", token: pathname });
        // Redirect to the login page
        router.push("/login");
      }
    }, [pathname, router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
