import { useRouter } from "next/router";

import Form from "@/components/elements/v1/form";
import { signIn } from "@/lib/firebase/utils/auth";

import styles from "./Login.module.scss";

const Login = () => {
  const router = useRouter();

  const handleOnSubmitForm = async (email: string, password: string) => {
    const { error, result } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={handleOnSubmitForm} />
    </div>
  );
};

export default Login;
