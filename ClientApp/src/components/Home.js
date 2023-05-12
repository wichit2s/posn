import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const aimages = [
  {
    url: 'https://picsum.photos/id/200/800/400',
    alt: 'Image 1'
  },
  {
    url: 'https://picsum.photos/id/400/800/400',
    alt: 'Image 2'
  },
  {
    url: 'https://picsum.photos/id/600/800/400',
    alt: 'Image 3'
  }
];
const bimages = [
  {
    url: 'https://picsum.photos/id/222/800/400',
    alt: 'Image 1'
  },
  {
    url: 'https://picsum.photos/id/444/800/400',
    alt: 'Image 2'
  },
  {
    url: 'https://picsum.photos/id/666/800/400',
    alt: 'Image 3'
  }
];

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
      <div class="flex justify-center items-center bg-gray-200 h-screen">
        <div class="grid grid-cols-2 gap-8 p-8 rounded-lg shadow-lg bg-white">
          <div class="flex flex-col justify-center items-center">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              {aimages.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Carousel>
            <h2 class="text-3xl font-bold mb-4">ค่าย 1</h2>
            <p class="text-gray-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra rutrum erat, at pharetra tortor molestie vel. Sed dapibus luctus mauris vel ultrices.</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">สมัคร</button>
          </div>
          <div class="flex flex-col justify-center items-center">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              {bimages.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </Carousel>
            <h2 class="text-3xl font-bold mb-4">ค่าย 2</h2>
            <p class="text-gray-700 text-lg mb-4">Suspendisse finibus metus a ipsum aliquet fermentum. Nunc tristique augue ac leo semper, nec rhoncus ipsum bibendum. Aenean ac rutrum velit, eu placerat neque.</p>
            <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">สมัคร</button>
          </div>
        </div>
        </div>
            <div class="flex justify-center items-center bg-gray-200 h-screen">
              <div class="grid grid-cols-2 gap-8 p-8 rounded-lg shadow-lg bg-white">
                <div class="flex flex-col justify-center items-center">
                  <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    {aimages.map((image, index) => (
                      <div key={index}>
                        <img src={image.url} alt={image.alt} />
                      </div>
                    ))}
                  </Carousel>
                  <h2 class="text-3xl font-bold mb-4">ค่าย 1</h2>
                  <p class="text-gray-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra rutrum erat, at pharetra tortor molestie vel. Sed dapibus luctus mauris vel ultrices.</p>
                  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">สมัคร</button>
                </div>
                <div class="flex flex-col justify-center items-center">
                  <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    {bimages.map((image, index) => (
                      <div key={index}>
                        <img src={image.url} alt={image.alt} />
                      </div>
                    ))}
                  </Carousel>
                  <h2 class="text-3xl font-bold mb-4">ค่าย 2</h2>
                  <p class="text-gray-700 text-lg mb-4">Suspendisse finibus metus a ipsum aliquet fermentum. Nunc tristique augue ac leo semper, nec rhoncus ipsum bibendum. Aenean ac rutrum velit, eu placerat neque.</p>
                  <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">สมัคร</button>
                </div>
              </div>
            </div>
    </div>
    );
  }
}
