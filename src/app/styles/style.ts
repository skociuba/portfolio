const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  sticky: 'sticky top-0',

  scrollToTop:
    'fixed right-0 top-1/2 transform -translate-y-1/2 z-50 p-2 cursor-pointer text-8xl text-white',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-20 my-10',
  input:
    ' mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80',
  textArea:
    'mt-1 block h-32 w-full  rounded border bg-black pl-1 text-white opacity-80',
  submitButton:
    'mt-1  block h-10 rounded  border text-custom-blue hover:bg-custom-blue hover:text-black',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
