$(document).ready(function () {

        $("#calculate").submit(calculateBMI);

        var myRules =
            {
                height:
                    {
                        required: true,
                        min: 59,
                        max: 79,
                        digits: true
                    },
                weight:
                    {
                        required: true,
                        min: 88,
                        max: 353,
                        digits: true
                    }
            };

            var myMessages =
                {
                    height:
                        {
                            required: " Need a number!",
                            digits: " Not a number!",
                            min: " Too short!",
                            max: " Too tall"
                        },
                    weight:
                        {
                            required: " Need a number!",
                            digits: " Not a number!",
                            min: " Too small!",
                            max: "T oo large!"
                        }
                };

        $("form").validate(   // keep for form validation
            {
                submitHandler: calculateBMI,
                rules: myRules,
                messages: myMessages
            }
        );

        function calculateBMI()
        {
            var height = parseInt($("#height").val());
            var weight = parseInt($("#weight").val());

            var BMI = ((weight / (height * height)) * 703).toFixed(1);

            if (BMI >= 16 && BMI < 18.5)
            {
                $("#output").text(`Your BMI is ${BMI}, you are underweight`);
            }
            else if (BMI >= 18.5 && BMI < 25)
            {
                $("#output").text(`Your BMI is ${BMI}, you are normal weight`);
            }
            else if (BMI >= 25 && BMI < 30)
            {
                $("#output").text(`Your BMI is ${BMI}, you are overweight`);
            }
            else if (BMI > 30)
            {
                $("#output").text(`Your BMI is ${BMI}, you are obese`);
            }
            else
            {
                $("#output").text(`Your BMI is ${BMI}, you are very very small!`);
            }

        }

    }
);