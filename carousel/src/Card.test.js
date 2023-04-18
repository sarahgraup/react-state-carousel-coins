import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
    const image = TEST_IMAGES[0];

    render(<Card
        caption={image.caption}
        src={image.src}
        currNum={0}
        totalNum={3} />);
});

it("matches snapshot", function () {
    const image = TEST_IMAGES[0];

    const { container } = render(<Card
        caption={image.caption}
        src={image.src}
        currNum={0}
        totalNum={3} />);
    expect(container).toMatchSnapshot();
});

