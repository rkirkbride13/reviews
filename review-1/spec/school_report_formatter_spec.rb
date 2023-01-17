require 'school_report_formatter'

RSpec.describe "school report formatter method" do

  it "should return an empty string if the input string is empty" do
    expect(format_report_results("")).to eq ""
  end

  it "should return a single report grade and it's quantity if given one report" do
    expect(format_report_results("Green")).to eq "Green: 1"
  end

  it "should return a single report grade and it's quantity if given another report" do
    expect(format_report_results("Red")).to eq "Red: 1"
  end

  it "should return a list of report grades and their quantities if given multiple reports" do
    expect(format_report_results("Green, Green, Red, Amber, Red")).to eq "Green: 2\nAmber: 1\nRed: 2"
  end

  it "should return a list of report grades and their quantities if given multiple reports" do
    expect(format_report_results("Green, Green, Green")).to eq "Green: 3"
  end

  it "should return a list of report grades and their quantities if given multiple reports" do
    expect(format_report_results("Green, Green, Red, Red, Amber, Red, Amber, Amber")).to eq "Green: 2\nAmber: 3\nRed: 3"
  end

  it "should throw an error if the input is incorrect" do
    expect{format_report_results("Gren, Red, Amber")}.to raise_error "Invalid input, please check it"
  end

  it "should throw an error if the input is incorrect" do
    expect{format_report_results("Gren, Red, Amber, Amber, Amber, Green")}.to raise_error "Invalid input, please check it"
  end

end