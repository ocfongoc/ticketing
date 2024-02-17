import Router from "next/router";
import useRequest from "../../hooks/use-request";
import { useEffect } from "react";

const Signout = () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });
  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing you out...</div>;
};

export default Signout;
