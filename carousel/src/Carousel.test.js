import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

});

it("matches the snapshot", function() {
  const { container } = render(
    <Carousel
    photos = {TEST_IMAGES}
    title = "images for testing"
    />

  );
  expect(container).toMatchSnapshot();
});

it("renders without crashing", function(){
  render(<Carousel
    photos = {TEST_IMAGES}
    title = "images for testing"
    />);
});

it("works when you click left arrow", function(){
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();

    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

});

it("hides left arrow when on first image and right when on last image", function(){
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    const rightArrow = container.querySelector(".bi-arrow-right-circle");

    expect(leftArrow).toHaveClass("hidden");
    expect(rightArrow).not.toHaveClass("hidden");

    fireEvent.click(rightArrow);
    expect(leftArrow).not.toHaveClass("hidden");
    expect(rightArrow).not.toHaveClass("hidden");

    fireEvent.click(rightArrow);
    expect(leftArrow).not.toHaveClass("hidden");
    expect(rightArrow).toHaveClass("hidden");

});
