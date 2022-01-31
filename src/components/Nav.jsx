function Nav() {
  return (
    <nav>
      <div className="wrapper wrap-1">
        <div className="cube cursor-circle-change">
          <a href="#" className="side side-hovered">
            work
          </a>
          <a href="#" className="side side-default">
            work
          </a>
        </div>
      </div>
      <span className="link-underline line-1"></span>
      <div className="wrapper wrap-2">
        <div className="cube cursor-circle-change">
          <a href="#" className="side side-hovered">
            about
          </a>
          <a href="#" className="side side-default">
            about
          </a>
        </div>
      </div>
      <span className="link-underline line-2"></span>
      <div className="wrapper wrap-3">
        <div className="cube cursor-circle-change">
          <a href="#" className="side side-hovered">
            contact
          </a>
          <a href="#" className="side side-default">
            contact
          </a>
        </div>
      </div>
      <span className="link-underline line-3"></span>
    </nav>
  );
}

export default Nav;
