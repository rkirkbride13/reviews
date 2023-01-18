require 'soundwave_filter'

RSpec.describe 'soundwave_filter method' do
  
  it "returns the same soundwave if frequencies fall within upper and lower limits" do
    expect(soundwave_filter([20,25,45,50,45], 20, 50)).to eq [20,25,45,50,45]
  end

  it "returns a new soundwave if a frequency falls below lower limit" do
    expect(soundwave_filter([10,25,45,50,45], 15, 50)).to eq [15,25,45,50,45]
  end

  it "returns a new soundwave if multiple frequencies falls below lower limit" do
    expect(soundwave_filter([10,25,45,50,45,10,5], 15, 50)).to eq [15,25,45,50,45,15,15]
  end

  it "returns a new soundwave if a frequency falls above upper limit" do
    expect(soundwave_filter([15,25,45,50,100], 15, 60)).to eq [15,25,45,50,60]
  end

  it "returns a new soundwave if multiple frequencies falls above upper limit" do
    expect(soundwave_filter([1000,15,25,45,50,100], 15, 60)).to eq [60,15,25,45,50,60]
  end

end