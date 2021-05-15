import React from 'react';

import AllergenCelery from '../images/allergen_celery.png';
import AllergenCrustacena from '../images/allergen_crustacena.png';
import AllergenEggs from '../images/allergen_eggs.png';
import AllergenFish from '../images/allergen_fish.png';
import AllergenMollusc from '../images/allergen_molluscs.png';
import AllergenMustard from '../images/allergen_mustard.png';
import AllergenPeanut from '../images/allergen_peanut.png';
import AllergenSesame from '../images/allergen_sesame.png';
import AllergenSoya from '../images/allergen_soya.png';
import AllergenWheat from '../images/allergen_wheat.png';

import './index.css';

const ShowCategory = ({ name, image, link }) => (
  <button className="allergenCategory">
    <img src={image} alt={name} />
    {name}
  </button>
) 

function Allergens() {
  const allCategories = [
    { 
      name: "Céleri",
      image: AllergenCelery,
      link: "celery"
    },
    { 
      name: "Cereales contenant du gluten",
      image: AllergenWheat,
      link: "cereales"
    },
    { 
      name: "Crustaces",
      image: AllergenCrustacena,
      link: "crustaces"
    },
    { 
      name: "Fruits a coques",
      image: AllergenPeanut,
      link: "fruitsacoques"
    },
    { 
      name: "Mollusque",
      image: AllergenMollusc,
      link: "mollusque"
    },
    { 
      name: "Moutarde",
      image: AllergenMustard,
      link: "moutarde"
    },
    { 
      name: "Oeufs",
      image: AllergenEggs,
      link: "oeufs"
    },
    { 
      name: "Poisson",
      image: AllergenFish,
      link: "poisson"
    },
    { 
      name: "Sésame",
      image: AllergenSesame,
      link: "sesame"
    },
    { 
      name: "Soja",
      image: AllergenSoya,
      link: "soja"
    },
  ]
  return (
    <div className="allergens">
      Liste des allergènes

      {/* Icons taken from https://erudus.com/industry-resources/allergy-icons */}
      <div className="allergenCategories">
        {allCategories.map(cat => 
          <ShowCategory name={cat.name} image={cat.image} link={cat.link} /> 
        )}
      </div>
    </div>
  );
}

export default Allergens;
