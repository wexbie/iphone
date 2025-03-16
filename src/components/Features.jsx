import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, videoCek } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#videoCek', {
      scrollTrigger: {
        trigger: '#videoCek',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#one-cikarilanlar', { y: 0, opacity: 1 })
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="one-cikarilanlar" className="section-heading">Ve tüm gelişmeler</h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Titanyumdan yapıldı.</h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="videoCek" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={videoCek} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="one-cikan-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="Titanyum" className="one-cikan-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="Titanyum 2" className="one-cikan-video g_grow" />
                </div>
              </div>
              <div className="one-cikan-yazi-container">
                <div className="flex-1 flex-center">
                  <p className="one-cikan-yazi g_text">
                    iPhone 15 Pro{' '}
                    <span className="text-white">
                      dünyanın en dayanıklı titanyum alaşımından üretilen ilk iPhone
                    </span>. Bu yeni tasarım, hem daha hafif hem de daha güçlü bir yapıya sahip, aynı zamanda uzun ömürlü dayanıklılık sunuyor.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="one-cikan-yazi g_text">
                    En iyi direnç-ağırlık oranına sahip metallerden biri olan titanyum, bu iki modeli{' '}
                    <span className="text-white">
                      şimdiye kadarki en hafif Pro modellerimiz
                    </span>
                    haline getirdi. Elinizde tuttuğunuz anda farkı hissedeceksiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
