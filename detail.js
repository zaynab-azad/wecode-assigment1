const sInfo = (props) => {
    return React.createElement(
        "div", { className: "sInfo" },

        React.createElement("img", { src: props.image }),


        React.createElement("div", { className: "studInfo" },
            React.createElement("p", {}, props.name),
            React.createElement("p", {}, props.study),
            React.createElement("p", {}, props.hobbies),
        )
    );

};