const logInUser = async (user) => {
  try {
    let response = await fetch("/auth-signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  if (typeof window !== "undefined") sessionStorage.removeItem("jwt");

  try {
    let response = await fetch("/auth-signout", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

function isAuthenticated() {
  if (typeof window == "undefined") return false;

  if (sessionStorage.getItem("jwt"))
    return JSON.parse(sessionStorage.getItem("jwt"));
  else return false;
}

function authenticate(jwt, cb) {
  if (typeof window !== "undefined")
    sessionStorage.setItem("jwt", JSON.stringify(jwt));
  cb();
}

const register = async (user) => {
  try {
    let response = await fetch("/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export default {
  isAuthenticated,
  authenticate,
  logInUser,
  signout,
  register,
};
