// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//Generates objects
const pAequorFactory = (n, arr) => {
  return {
    specimenNum: n,
    dna: arr,
    mutate(){
    let location = Math.floor(Math.random()*15)
    let oldBase = this.dna[location]
    let newBase = returnRandBase()
    while (oldBase === newBase){
      newBase = returnRandBase()
    }
    this.dna[location] = newBase
    return this.dna
  },
  // find similarity between two strands
  compareDNA(otherPA){
    let same = 0
    for(let i = 0; i<this.dna.length; i++){
      if(otherPA.dna[i] === this.dna[i]){
        same++
      }
    }
    let percentage = Math.floor((same/this.dna.length) * 100)
    console.log(`Number: ${otherPA.specimenNum} and Number: ${this.specimenNum} shares ${percentage}% of bases`)
  },
  // checks if at least 60% of bases are either C or G
  willLikelySurvive(){
    let survive = 0
    for (let i = 0; i<this.dna.length; i++){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        survive++
      }
    }
    return survive >= this.dna.length * 0.6
  }
  }
}
// creates a batch with n strands
const batch = (n) =>{
  let batch = []
  for(let i = 0; i<n; i++){
    batch.push(pAequorFactory((i + 1), mockUpStrand()))
  }
  return batch
}















