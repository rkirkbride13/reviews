require 'soundwave_filter'

RSpec.describe 'soundwave_filter method' do
  
  it "returns the same soundwave if frequencies fall within upper and lower limits" do
    expect(soundwave_filter([20,25,45,50,45], 20, 50)).to eq [20,25,45,50,45]
  end

end