import TemplatePointers from "./components/TemplatePointers"



function LandingIntro() {

  return (
    <div className="hero min-h-full rounded-l-xl bg-orange-50">
      <div className="hero-content py-12">
        <div className="max-w-md text-black font-sans">
          <div className="text-center mt-12 mb-16">
            <img src="./logo_drcom_orange.png" className="w-40 inline-block" alt="dashwind-logo" />
          </div>

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}

        </div>

      </div>
    </div>
  )

}

export default LandingIntro