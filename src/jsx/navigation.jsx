/**
 * @file navigation.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the navbar
 * 
 * @version 1.0
 * @date 2021-04-28
 * 
 */

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                {
                    name: "Home",
                    location: "/"
                },
                {
                    name: "Schedule",
                    location: "/schedule"
                },
                {
                    name: "Pokemon",
                    location: "/pokemon"
                },
                {
                    name: "Shinylocke",
                    location: "/shinylocke"
                }]
        };
    }

    render() {

        var navbarItems = this.state.pages.map(page => {

            let navbarLink = (
                <li class="nav-item">
                    <a class="nav-link" href={page.location}>{page.name}</a>
                </li>
            );

            return (
                navbarLink
            );
        });

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <img id="navbarIcon" src="public/assets/channel-logo-icon.png" alt="Home"></img>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        {navbarItems}
                    </ul>
                </div>
            </nav>

        );
    }
}

ReactDOM.render(<Navigation />, document.getElementById("navigation"));