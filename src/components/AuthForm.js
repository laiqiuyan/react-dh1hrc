import React, { useRef, useState } from "react";

const AuthFrom = () => {
  const [isLoadingForm, setisLoadingForm] = useState(true);
  // 通过Ref来获取值
  const usernameInp = useRef();
  const pwdInp = useRef();
  // 表单提交的方法
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // 获取用户输入的内容
    const username = usernameInp.current.value;
    const password = pwdInp.current.value;
    // 处理登录功能
    console.log(username, password);
  };
  return (
    <div>
      <h1>{isLoadingForm ? "登录" : "注册"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input ref={usernameInp} type='text' placeholder='请输入用户密码' />
        </div>
        <div>
          <input ref={pwdInp} type='password' placeholder='请输入密码' />
        </div>{" "}
        <div>
          <button>{isLoadingForm ? "登录" : "注册"} </button>
          <br></br>
          <a
            href='#'
            onClick={(event) => {
              event.preventDefault();
              setisLoadingForm((prevState) => !prevState);
            }}
          >
            {isLoadingForm ? "没有账号，去注册" : "已有账号，去登录"}
          </a>

          <br></br>
        </div>
      </form>
    </div>
  );
};

export default AuthFrom;
