// eslint-disable-next-line no-unused-vars
import React from 'react';

const Skills = () => {
    return (
        <div>
            <div id="skills
            ">
                {/* Section heading ------------------------------------------------------------------- */}
                <div className="container mx-auto pt-0 mb-16 md:pt-16 px-5 md:mb-20 sm font-sans relative">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-8 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
                            <div>
                                <h1 className="text-4xl md:text-4xl font-custom font-extrabold text-transparent bg-gradient-to-l from-teal-100 via-violet-500 to-teal-600 bg-clip-text mb-2 pb-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Skills</h1>
                                <p className="text-light text-gray-400 font-light text-lg lg:text-2xl font-sans tracking-wide leading-relaxed lg:leading-relaxed" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Here are some of the skills which I've learned. </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body ------------------------------------------------------------------- */}
                <div className="mt-0 pb-8 pt-0 md:pb-8 md:pt-0 font-custom">
                    <div className="container px-5 mx-auto">

                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">

                                <div className='flex gap-2'>
                                    <div className='w-80 h-80 border-2 text-center'>
                                        hellow
                                    </div>
                                    <div className='w-80 border-2 text-center'>
                                        hellow
                                    </div>
                                    <div className='w-80 border-2 text-center'>
                                        hellow
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;