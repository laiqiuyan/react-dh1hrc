import React from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div>
      {/* 这个是UI链接跳转的主菜单 */}
      <ul>
        <li>
          <Link to='/profile'>点击去Profile页面</Link>
        </li>
        <li>
          <Link to='/'>点击去Home页面</Link>
        </li>
        <li>
          <Link to='/auth'>登录/注册</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
